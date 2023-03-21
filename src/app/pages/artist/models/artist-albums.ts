export interface APIArtistAlbums {
  href: string;
  items: AlbumItem[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}
export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: AlbumGroup;
  uri: string;
}

export interface AlbumItem extends Artist {
  album_group: AlbumGroup;
  album_type: AlbumGroup;
  artists: Artist[];
  available_markets: string[];
  images: Image[];
  release_date: Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
}

export enum AlbumGroup {
  Album = "album",
  Single = "single",
}

export interface ExternalUrls {
  spotify: string;
}

export enum Type {
  Artist = "artist",
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export enum ReleaseDatePrecision {
  Day = "day",
}
