export interface ArtistResponse {
  data: Data;
}

export interface Data {
  artist: Artist;
}

export interface Artist {
  id: string;
  uri: URI;
  following: boolean;
  sharingInfo: SharingInfo;
  profile: Profile;
  visuals: ArtistVisuals;
  discography: Discography;
  stats: Stats;
  relatedContent: RelatedContent;
  goods: Goods;
}

export interface Discography {
  latest: Latest;
  popularReleases: Albums;
  singles: Albums;
  albums: Albums;
  compilations: Albums;
  topTracks: TopTracks;
}

export interface Albums {
  totalCount: number;
  items: AlbumsItem[];
}

export interface AlbumsItem {
  releases: Merch;
}

export interface Merch {
  items: MerchItem[];
}

export interface MerchItem {
  id: string;
  uri: string;
  name: string;
  type: LatestType;
  copyright: Copyright;
  date: ItemDate;
  coverArt: CoverArt;
  tracks: Tracks;
  label: Name;
  playability: Playability;
  sharingInfo: SharingInfo;
}

export interface Copyright {
  items: CopyrightItem[];
}

export interface CopyrightItem {
  type: PurpleType;
  text: Text;
}

export enum Text {
  The2024KO = '2024 K.O',
  The2025KO = '2025 K.O',
}

export enum PurpleType {
  C = 'C',
  P = 'P',
}

export interface CoverArt {
  sources: ItemSource[];
}

export interface ItemSource {
  url: string;
  width: number | null;
  height: number | null;
}

export interface ItemDate {
  year: number;
  month: number;
  day: number;
  precision: Precision;
}

export enum Precision {
  Day = 'DAY',
}

export enum Name {
  KO = 'K.O',
}

export interface Playability {
  playable: boolean;
  reason: Reason;
}

export enum Reason {
  Playable = 'PLAYABLE',
}

export interface SharingInfo {
  shareId: string;
  shareUrl: string;
}

export interface Tracks {
  totalCount: number;
}

export enum LatestType {
  Album = 'ALBUM',
  Single = 'SINGLE',
  EP = "EP",
}

export interface Latest {
  id: string;
  uri: string;
  name: string;
  type: LatestType;
  copyright: Copyright;
  date: LatestDate;
  coverArt: CoverArt;
  tracks: Tracks;
  label: Name;
  playability: Playability;
}

export interface LatestDate {
  year: number;
}

export interface TopTracks {
  items: TopTracksItem[];
}

export interface TopTracksItem {
  uid: string;
  track: Track;
}

export interface Track {
  id: string;
  uri: string;
  name: string;
  playcount: string;
  discNumber: number;
  duration: Duration;
  playability: Playability;
  contentRating: ContentRating;
  artists: Artists;
  album: Album;
}

export interface Album {
  uri: string;
  coverArt: AlbumCoverArt;
}

export interface AlbumCoverArt {
  sources: PurpleSource[];
}

export interface PurpleSource {
  url: string;
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  uri: URI;
  profile: UserLocation;
}

export interface UserLocation {
  name: string;
}

export enum URI {
  SpotifyArtistUri = 'spotify:artist:5ECec6tOdcX7cIhshkDQxb',
}

export interface ContentRating {
  label: Label;
}

export enum Label {
  None = 'NONE',
}

export interface Duration {
  totalMilliseconds: number;
}

export interface Goods {
  events: Events;
  merch: Merch;
}

export interface Events {
  userLocation: UserLocation;
  concerts: Concerts;
}

export interface Concerts {
  totalCount: number;
  items: any[];
  pagingInfo: PagingInfo;
}

export interface PagingInfo {
  limit: number;
}

export interface Profile {
  name: Name;
  verified: boolean;
  pinnedItem: null;
  biography: Biography;
  externalLinks: ExternalLinks;
  playlists: Albums;
}

export interface Biography {
  text: string;
}

export interface ExternalLinks {
  items: ExternalLinksItem[];
}

export interface ExternalLinksItem {
  name: string;
  url: string;
}

export interface RelatedContent {
  appearsOn: Albums;
  featuring: Featuring;
  discoveredOn: Albums;
  relatedArtists: RelatedArtists;
}

export interface Featuring {
  totalCount: number;
  items: FeaturingItem[];
}

export interface FeaturingItem {
  uri: string;
  id: string;
  owner: UserLocation;
  name: string;
  description: string;
  images: Images;
}

export interface Images {
  totalCount: number;
  items: CoverArt[];
}

export interface RelatedArtists {
  totalCount: number;
  items: RelatedArtistsItem[];
}

export interface RelatedArtistsItem {
  id: string;
  uri: string;
  profile: UserLocation;
  visuals: ItemVisuals;
}

export interface ItemVisuals {
  avatarImage: CoverArt;
}

export interface Stats {
  followers: number;
  monthlyListeners: number;
  worldRank: number;
  topCities: TopCities;
}

export interface TopCities {
  items: TopCitiesItem[];
}

export interface TopCitiesItem {
  numberOfListeners: number;
  city: string;
  country: string;
  region: string;
}

export interface ArtistVisuals {
  gallery: Gallery;
  avatarImage: RImage;
  headerImage: RImage;
}

export interface RImage {
  sources: ItemSource[];
  extractedColors: ExtractedColors;
}

export interface ExtractedColors {
  colorRaw: ColorRaw;
}

export interface ColorRaw {
  hex: string;
}

export interface Gallery {
  items: CoverArt[];
}
