import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { SpotifyService } from "src/app/services/spotify.service";
import { APIArtist } from "../models/artist-model";
import { AlbumItem, APIArtistAlbums } from "../models/artist-albums";

@Injectable({
  providedIn: "root",
})
export class ArtistService {
  constructor(private spotifyService: SpotifyService) {}

  public getArtist(artistId: string): Observable<APIArtist> {
    const artistUrl: string = `artists/${artistId}`;

    return this.spotifyService.getQuery(artistUrl).pipe(
      map((res: APIArtist) => {
        if (!res) {
          throw new Error("Value expected!");
        } else {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      })
    );
  }

  public getAlbums(artistId: string): Observable<AlbumItem[]> {
    const albumUrl: string = `artists/${artistId}/albums`;

    return this.spotifyService.getQuery(albumUrl).pipe(
      map((res: APIArtistAlbums) => {
        if (!res) {
          throw new Error("Value expected!");
        } else {
          return res.items;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      })
    );
  }
}
