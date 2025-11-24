import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumTrack } from './albumTrack';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cancion } from './cancion';
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {


  private apiUrl = 'http://localhost:8080/artists';

  constructor(private http: HttpClient) { }


  getAllalbums(): Observable<AlbumTrack[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(item => this.mapToAlbumTrack(item)))
    );
  }

  getAlbumById(id: number): Observable<AlbumTrack> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(data => this.mapToAlbumTrack(data))
    );
  }
  
  private mapToAlbumTrack(data: any): AlbumTrack{
    return new AlbumTrack(
      data.id,
      data.spotifyId,
      data.name,
      data.year,
      data.loved,
      data.image,
      data.songs.map((songData: any) => new Cancion(
        songData.id,
        songData.spotifyId,
        songData.name,
        songData.minutes,
        songData.seconds,
        songData.loved
      ))
    );

  }


}
