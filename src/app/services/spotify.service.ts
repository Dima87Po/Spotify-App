import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  public getQuery(query: string) {
    const url: string = environment.url + `${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQB7Unn14ghHFPcFeh1DHiDxSfdZLua7jaSI-dtipbyBVEkaEuas535r-ai_P3wCWUkVVqrSviWnELO9hL_-DdQh0g2jW399kWAxPeszd_0-L9H6DQEPtCUgaxDkQOg-l1UNBZSgha9_2Rvpjc4dwFVTqgPbNkdREeLbDCs5ytpVnJcWWFQruBt8DAhiaef9mml7",
    });

    return this._http.get(url, { headers });
  }
}
