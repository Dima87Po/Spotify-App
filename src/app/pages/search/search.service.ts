import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { SpotifyService } from "src/app/services/spotify.service";
import { APISearch } from "./models/search-model";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private spotifyService: SpotifyService) {}

  public getTracksAndArtists(term: string): Observable<APISearch[]> {
    const searchUrl: string = `search?q=${term}&type=track%2Cartist`;

    return this.spotifyService.getQuery(searchUrl).pipe(
      map((res: APISearch[]) => {
        if (!res) {
          throw new Error("Value expected!");
        } else {
          console.log("res:", res);
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      })
    );
  }
}
