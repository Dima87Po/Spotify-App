import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(private _http: HttpClient) {}

  public getQuery(query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQASWKaLkq3uxl7GA6Jh0hilhntWHZaYMmDk7Z-5kQmttemAiiNjB4RXEijLGvR1WTDV7UY3IMRfYdwB3uayBK2-FixVY0LmcxMpQIsJtjtggahTLAq-3nJD0q6b3z-PRc8Z16yS_Ved0wo7CUSOUzcNdn-ut00DbzXC5LROYt1kLHIIEhAepfbnKb1XHX5cADxQ',
    });

    return this._http.get(url, { headers });
  }
}
