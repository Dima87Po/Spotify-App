import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APINewReleases, FormattedNewReleases } from 'src/app/pages/home/models/new-releases-model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Injectable({
    providedIn: 'root'
}) 

export class NewReleasesService {
  
  private newReleasesUrl: string = 'browse/new-releases';

  constructor(private spotifyService: SpotifyService) { }
    
  public getNewReleases(): Observable<FormattedNewReleases[]> {
    return this.spotifyService.getQuery(this.newReleasesUrl).pipe(
      map((res: APINewReleases) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          const formattedItems: FormattedNewReleases[] = res.albums.items.map((
            { id, images, name, artists, type }) => (
            { id, images, name, artists, type }
            ));
          return formattedItems;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }


}
