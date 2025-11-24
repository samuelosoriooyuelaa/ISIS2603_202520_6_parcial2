import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cancion } from './cancion';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:8080/artist/album';

  constructor(private http: HttpClient) { }



  getAllSongs(): Observable<Cancion[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(item => this.mapToCancion(item)))
    );
  }
  public mapToCancion(data: any): Cancion {
    return new Cancion(
      data.id,
      data.spotifyId,
      data.name,
      data.minutes,
      data.seconds,
      data.loved
    );
  }

  getSongById(id: number): Observable<Cancion> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(data => this.mapToCancion(data))
    );
  }

    

}
