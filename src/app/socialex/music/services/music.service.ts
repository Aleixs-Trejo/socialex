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
import { ExploreMusic, SimplifiedArtistHome, SpotifyMapper } from '../mapper/music.mapper';

// Environment
import { environment } from 'src/environments/environment';

const { spotifyApiUrl, spotifyApiKey2, spotifyApiHost } = environment;

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private http = inject(HttpClient);
  private exploreSpotifyCache = new Map<string, ExploreMusic[]>();
  private artistSimplifiedSpotifyCache = new Map<string, SimplifiedArtistHome>();
  private artistFullSpotifyCache = new Map<string, Artist>();
  private albumSpotifyCache = new Map<string, Album>();

  getExploreSpotify(): Observable<ExploreMusic[]> {
    const cacheKey = 'explore-spotify';
    const cachedExploreSpotify = this.exploreSpotifyCache.get(cacheKey);

    if (cachedExploreSpotify) {
      return of(cachedExploreSpotify);
    }

    return this.http
      .get<Main>(`${spotifyApiUrl}/browse_all?limit=5&pageSize=5&offset=0`, {
        headers: {
          'x-rapidapi-key': spotifyApiKey2,
          'x-rapidapi-host': spotifyApiHost,
        }
      })
      .pipe(
        map(res => SpotifyMapper.mapExploreMusic(res)),
        tap(exploreMusic => this.exploreSpotifyCache.set(cacheKey, exploreMusic)),
      );
  }

  getSpotifyPage(uri: string): Observable<Main> {
    return this.http.get<Main>(`${spotifyApiUrl}/page`, {
      params: { uri, limit: 4, offset: 0 },
      headers: {
        'x-rapidapi-key': spotifyApiKey2,
        'x-rapidapi-host': spotifyApiHost,
      }
    }).pipe(tap(res => console.log(res)));
  }

  getSpotifyArtistSimplified(id: string): Observable<SimplifiedArtistHome> {
    const cacheKey = `spotify-artist-simplified-${id}`;
    const cachedArtist = this.artistSimplifiedSpotifyCache.get(cacheKey);

    if (cachedArtist) {
      return of(cachedArtist);
    }

    return this.http.get<ArtistResponse>(`${spotifyApiUrl}/artist_overview`, {
      params: { id },
      headers: {
        'x-rapidapi-key': spotifyApiKey2,
        'x-rapidapi-host': spotifyApiHost,
      }
    }).pipe(
      map(artist => SpotifyMapper.mapArtistHome(artist)),
      tap(simpleArtist => this.artistSimplifiedSpotifyCache.set(cacheKey, simpleArtist)),
    );
  }

  getSpotifyArtistFull(id: string): Observable<Artist> {
    const cacheKey = `spotify-artist-full-${id}`;
    const cachedArtist = this.artistFullSpotifyCache.get(cacheKey);

    if (cachedArtist) {
      return of(cachedArtist);
    }

    return this.http.get<ArtistResponse>(`${spotifyApiUrl}/artist_overview`, {
      params: { id },
      headers: {
        'x-rapidapi-key': spotifyApiKey2,
        'x-rapidapi-host': spotifyApiHost,
      }
    }).pipe(
      map(artist => artist.data.artist),
      tap(artist => this.artistFullSpotifyCache.set(cacheKey, artist)),
    );
  }

  getSpotifyAlbum(ids: string): Observable<Album> {
    const cacheKey = `spotify-album-${ids}`;
    const cachedAlbum = this.albumSpotifyCache.get(cacheKey);

    if (cachedAlbum) {
      return of(cachedAlbum);
    }

    return this.http.get<AlbumResponse>(`${spotifyApiUrl}/albums`, {
      params: { ids },
      headers: {
        'x-rapidapi-key': spotifyApiKey2,
        'x-rapidapi-host': spotifyApiHost,
      }
    }).pipe(
      map(album => album.albums[0]),
      tap(album => this.albumSpotifyCache.set(cacheKey, album)),
    );
  }
}
