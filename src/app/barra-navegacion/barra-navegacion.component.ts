import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
