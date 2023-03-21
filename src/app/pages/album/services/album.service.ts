import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

import { APIAlbum } from '../models/album-model';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  constructor(private spotifyService: SpotifyService) { }

  public getAlbum(albumId: string): Observable<APIAlbum> {
    const albumUrl: string = `albums/${ albumId }`;

    return this.spotifyService.getQuery(albumUrl).pipe(
      map((res: APIAlbum) => {
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
