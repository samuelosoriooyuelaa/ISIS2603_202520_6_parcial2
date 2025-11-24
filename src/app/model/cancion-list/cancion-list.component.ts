import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrl: './cancion-list.component.css'
})
export class CancionListComponent {
  @Input() canciones: Cancion[] = [];
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  
  onSeleccionarCancion(cancion: Cancion) {
    this.cancionSeleccionada.emit(cancion);

  @Output() loveCancion = new EventEmitter<boolean>();

  onLoveCancion(loved: boolean) {
    this.loveCancion.emit(loved);
  } 



}
}


