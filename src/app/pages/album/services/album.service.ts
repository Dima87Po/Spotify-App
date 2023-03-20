import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

import { APIAlbums } from '../models/album-model';



@Injectable({
  providedIn: 'root'
}) // service provided in Artist module
export class AlbumService {

  constructor(private spotifyService: SpotifyService) { }

  // get album info
  public getAlbum(albumId: string): Observable<APIAlbums> {
    const albumUrl: string = `albums/${ albumId }`;

    return this.spotifyService.getQuery(albumUrl).pipe(
      map((res: APIAlbums) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
