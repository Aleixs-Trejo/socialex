import { ArtistResponse } from "../interfaces/spotify-artist.interface";
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
  singles: SimplifiedReleaseHome[];
}

export interface SimplifiedReleaseHome {
  id: string;
  uri: string;
  name: string;
  urlImage: string;
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

  static mapArtistHome(res: ArtistResponse): SimplifiedArtistHome {
    const artist = res?.data?.artist;
    const artistName = artist?.profile?.name ?? '';
    const artistUri = artist?.uri ?? '';
    const singles = artist?.discography?.singles?.items ?? [];

    const mappedSingles: SimplifiedReleaseHome[] = singles.map(single => {
      const release = single.releases.items[0];

      return {
        id: release?.id ?? '',
        uri: release?.uri ?? '',
        name: release?.name ?? '',
        urlImage: release?.coverArt?.sources?.[0]?.url ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png',
      }
    }).filter(single => single.name !== '');

    return {
      artistName,
      artistUri,
      singles: mappedSingles,
    }
  }
}