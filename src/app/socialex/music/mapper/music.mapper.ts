import { Artist, ArtistResponse, Latest } from "../interfaces/spotify-artist.interface";
import { Main } from "../interfaces/spotify-explore.interface";

export interface ExploreMusic {
  uri: string;
  urlImage: string;
  title: string;
  bgColor: string;
}

export interface SimplifiedArtistHome {
  artistName: string;
  artistUri: string;
  avatarImage: string;
}

export interface ArtistsRelatedSimplified extends SimplifiedArtistHome {
  artistsRelated: SimplifiedArtistHome[];
}

export class SpotifyMapper {
  static mapExploreMusic(musicResponse: Main): ExploreMusic[] {
    const sections = musicResponse?.data?.browseStart?.sections?.items ?? [];
    const allMusicItems = sections.flatMap(section => section.sectionItems?.items ?? []);
  
    return allMusicItems.map(musicItem => {
      const card = musicItem.content.data.data?.cardRepresentation;

      return {
        uri: musicItem.uri,
        urlImage: card?.artwork?.sources?.[0]?.url ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png',
        title: card?.title?.transformedLabel ?? '',
        bgColor: card?.backgroundColor?.hex ?? '#222',
      }
    }).filter(music => music.title !== '');
  }

  static mapArtistHome(res: ArtistResponse): ArtistsRelatedSimplified {
    const artist = res?.data?.artist;
    const artistName = artist?.profile?.name ?? '';
    const artistUri = artist?.uri ?? '';
    const avatarImage = artist?.visuals?.avatarImage?.sources[0]?.url ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png';
    const artistsRelated = artist?.relatedContent?.relatedArtists?.items.map(item => ({
      artistName: item.profile?.name ?? '',
      artistUri: item.uri ?? '',
      avatarImage: item.visuals?.avatarImage?.sources[0]?.url ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png',
    }));

    return {
      artistName,
      artistUri,
      avatarImage,
      artistsRelated,
    }
  }

  static getDiscographyArray(artist: Artist): Latest[] {
    const latest = artist?.discography.latest;
    const popular = artist?.discography.popularReleases?.items.map(item => (item.releases.items[0]));

    if (!latest) return popular;
    const uniquePopular = popular?.filter(item => item && latest && item.id !== latest.id);

    const data = latest ? [latest, ...uniquePopular] : uniquePopular;
    return data;
  }
}