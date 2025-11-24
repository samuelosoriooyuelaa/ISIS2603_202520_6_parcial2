import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { AlbumTrack } from '../albumTrack';
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  @Input() albumes: AlbumTrack[] = [];
  @Output() albumSeleccionado = new EventEmitter<AlbumTrack>();

  onSeleccionarAlbum(album: AlbumTrack) {
    this.albumSeleccionado.emit(album);
  }

}
