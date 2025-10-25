// Angular
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import { Main } from '../interfaces/spotify-explore.interface';
import { Artist, ArtistResponse } from '../interfaces/spotify-artist.interface';
import { AlbumResponse, Album } from '../interfaces/spotify-albums.interface';

// RxJS
import { map, Observable, of, tap } from 'rxjs';

// Mapper
import {
  ArtistsRelatedSimplified,
  ExploreMusic,
  SpotifyMapper,
} from '../mapper/music.mapper';

// Environment
import { environment } from 'src/environments/environment';
import { SearchResponse } from '../interfaces/spotify-search.interface';

const { spotifyApiUrl, spotifyApiKey3, spotifyApiHost } = environment;

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private http = inject(HttpClient);
  private exploreSpotifyCache = new Map<string, ExploreMusic[]>();
  private artistSimplifiedSpotifyCache = new Map<string, ArtistsRelatedSimplified>();
  private artistFullSpotifyCache = new Map<string, Artist>();
  private albumSpotifyCache = new Map<string, Album>();

  private searchLocalStorage = new Map<string, SearchResponse>();

  getExploreSpotify(): Observable<ExploreMusic[]> {
    const cacheKey = 'explore-spotify';
    const cachedExploreSpotify = this.exploreSpotifyCache.get(cacheKey);

    if (cachedExploreSpotify) {
      return of(cachedExploreSpotify);
    }

    const localStorageData = localStorage.getItem(`${cacheKey}`);
    if (localStorageData) {
      try {
        const parsedData = JSON.parse(localStorageData) as ExploreMusic[];
        this.exploreSpotifyCache.set(cacheKey, parsedData);
        return of(parsedData);
      } catch (error) {
        console.error(error);
        localStorage.removeItem(`${cacheKey}`);
      }
    }

    return this.http
      .get<Main>(`${spotifyApiUrl}/browse_all?limit=5&pageSize=5&offset=0`, {
        headers: {
          'x-rapidapi-key': spotifyApiKey3,
          'x-rapidapi-host': spotifyApiHost,
        },
      })
      .pipe(
        map((res) => SpotifyMapper.mapExploreMusic(res)),
        tap((exploreMusic) => {
          this.exploreSpotifyCache.set(cacheKey, exploreMusic);
          localStorage.setItem(`${cacheKey}`, JSON.stringify(exploreMusic));
        })
      );
  }

  getSpotifyArtistSimplified(id: string): Observable<ArtistsRelatedSimplified> {
    const cacheKey = `spotify-artist-simplified-${id}`;
    const cachedArtist = this.artistSimplifiedSpotifyCache.get(cacheKey);

    if (cachedArtist) {
      return of(cachedArtist);
    }

    const localStorageData = localStorage.getItem(cacheKey);
    if (localStorageData) {
      try {
        const parsedData =  JSON.parse(localStorageData) as ArtistsRelatedSimplified;
        this.artistSimplifiedSpotifyCache.set(cacheKey, parsedData);
        return of(parsedData);
      } catch (error) {
        console.error(error);
        localStorage.removeItem(cacheKey);
      }
    }

    return this.http
      .get<ArtistResponse>(`${spotifyApiUrl}/artist_overview`, {
        params: { id },
        headers: {
          'x-rapidapi-key': spotifyApiKey3,
          'x-rapidapi-host': spotifyApiHost,
        },
      })
      .pipe(
        map((artist) => SpotifyMapper.mapArtistHome(artist)),
        tap((simpleArtist) => {
          this.artistSimplifiedSpotifyCache.set(cacheKey, simpleArtist);
          localStorage.setItem(cacheKey, JSON.stringify(simpleArtist));
        })
      );
  }

  getSpotifyArtistFull(id: string): Observable<Artist> {
    const cacheKey = `spotify-artist-full-${id}`;
    const cachedArtist = this.artistFullSpotifyCache.get(cacheKey);

    if (cachedArtist) {
      return of(cachedArtist);
    }

    const localStorageData = localStorage.getItem(cacheKey);
    if (localStorageData) {
      try {
        const parsedData =  JSON.parse(localStorageData) as Artist;
        this.artistFullSpotifyCache.set(cacheKey, parsedData);
        return of(parsedData);
      } catch (error) {
        console.error(error);
        localStorage.removeItem(cacheKey);
      }
    }

    return this.http
      .get<ArtistResponse>(`${spotifyApiUrl}/artist_overview`, {
        params: { id },
        headers: {
          'x-rapidapi-key': spotifyApiKey3,
          'x-rapidapi-host': spotifyApiHost,
        },
      })
      .pipe(
        map((artist) => artist.data.artist),
        tap((artist) => {
          this.artistFullSpotifyCache.set(cacheKey, artist);
          localStorage.setItem(cacheKey, JSON.stringify(artist));
        }),
      );
  }

  getSpotifyAlbum(ids: string): Observable<Album> {
    const cacheKey = `spotify-album-${ids}`;
    const cachedAlbum = this.albumSpotifyCache.get(cacheKey);

    if (cachedAlbum) {
      return of(cachedAlbum);
    }

    return this.http
      .get<AlbumResponse>(`${spotifyApiUrl}/albums`, {
        params: { ids },
        headers: {
          'x-rapidapi-key': spotifyApiKey3,
          'x-rapidapi-host': spotifyApiHost,
        },
      })
      .pipe(
        map((album) => album.albums[0]),
        tap((album) => this.albumSpotifyCache.set(cacheKey, album))
      );
  }

  searchSpotify(query: string): Observable<SearchResponse> {
    const normalizedQuery = query.trim().toLowerCase();

    const cachedMemory = this.searchLocalStorage.get(normalizedQuery);
    if (cachedMemory) {
      return of(cachedMemory);
    }

    const localStorageData = localStorage.getItem(`search-spotify-${normalizedQuery}`);
    if (localStorageData) {
      try {
        const parsedData = JSON.parse(localStorageData) as SearchResponse;
        this.searchLocalStorage.set(normalizedQuery, parsedData);
        return of(parsedData);
      } catch (error) {
        console.error(error);
        localStorage.removeItem(`search-spotify-${normalizedQuery}`);
      }
    }

    return this.http
      .get<SearchResponse>(`${spotifyApiUrl}/search`, {
        params: {
          q: encodeURIComponent(normalizedQuery),
          type: 'multi',
          offset: 0,
          limit: 2,
          numberTopOfResults: 2,
        },
        headers: {
          'x-rapidapi-key': spotifyApiKey3,
          'x-rapidapi-host': spotifyApiHost,
        },
      })
      .pipe(
        tap((res) => {
          this.searchLocalStorage.set(normalizedQuery, res);
          localStorage.setItem(
            `search-spotify-${normalizedQuery}`,
            JSON.stringify(res)
          );
        })
      );
  }
}
