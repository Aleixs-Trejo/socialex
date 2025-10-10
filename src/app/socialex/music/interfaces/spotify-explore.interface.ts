export interface Main {
  data: MainData;
}

export interface MainData {
  browseStart: BrowseStart;
}

export interface BrowseStart {
  __typename: BrowseStartTypename;
  uri: string;
  sections: Sections;
}

export enum BrowseStartTypename {
  BrowseClientFeature = 'BrowseClientFeature',
  BrowseSectionContainer = 'BrowseSectionContainer',
}

export interface Sections {
  items: SectionsItem[];
}

export interface SectionsItem {
  uri: string;
  data: ItemData;
  sectionItems: SectionItems;
}

export interface ItemData {
  __typename: string;
  title: Title;
}

export interface Title {
  transformedLabel: string;
}

export interface SectionItems {
  items: MusicData[];
}

export interface MusicData {
  uri: string;
  content: Content;
}

export interface Content {
  __typename: ContentTypename;
  data: ContentData;
}

export enum ContentTypename {
  BrowseSectionContainerWrapper = 'BrowseSectionContainerWrapper',
  BrowseXlinkResponseWrapper = 'BrowseXlinkResponseWrapper',
}

export interface ContentData {
  __typename: BrowseStartTypename;
  data?: DataData;
  title?: Title;
  featureUri?: string;
  artwork?: Artwork;
  backgroundColor?: BackgroundColor;
  iconOverlay?: Artwork;
}

export interface Artwork {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface BackgroundColor {
  hex: string;
}

export interface DataData {
  cardRepresentation: CardRepresentation;
}

export interface CardRepresentation {
  title: Title;
  artwork: Artwork;
  backgroundColor: BackgroundColor;
}
