import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AlbumTrack } from '../albumTrack';
@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent {
  @Input() album!: AlbumTrack;
  @Output() seleccionar = new EventEmitter<AlbumTrack>();
  
  seleccionarAlbum() {
    this.seleccionar.emit(this.album);
  }


}
