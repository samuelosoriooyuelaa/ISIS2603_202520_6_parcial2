import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cancion } from '../cancion';
@Component({
  selector: 'app-cancion-card',
  templateUrl: './cancion-card.component.html',
  styleUrl: './cancion-card.component.css'
})
export class CancionCardComponent {

  @Input() cancion!: Cancion;
  @Output() seleccionar = new EventEmitter<Cancion>();

  seleccionarCancion() {
    this.seleccionar.emit(this.cancion);
  }

}
