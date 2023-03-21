export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface APIAlbum extends Artist {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: ExternalIDS;
    genres: any[];
    images: Image[];
    label: string;
    popularity: number;
    release_date: Date;
    release_date_precision: string;
    total_tracks: number;
    tracks: Tracks;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIDS {
    upc: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}

export interface Item extends Artist {
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    is_local: boolean;
    preview_url: string;
    track_number: number;
}
