import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { ContactoFooterComponent } from '../contacto/contacto.component';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BarraNavegacionComponent, ContactoFooterComponent, SobreMiComponent, ServiciosComponent, ProyectosComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.typeEffect('intro-text', 'Hola, Soy Santiago y ...', 100);
    this.typeEffect('intro-text-principal', 'oy Software Developer', 1500);
    this.observeItems();
  }

  observeItems(): void {
    if (typeof document !== 'undefined') {
      const items = document.querySelectorAll('.tecnologia-item');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          } else {
            entry.target.classList.remove('fade-in-visible');
          }
        });
      }, {
        root: null,
        threshold: 0.3
      });

      items.forEach(item => {
        observer.observe(item);
      });
    }
  }

  typeEffect(elementId: string, text: string, delay: number): void {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(elementId);
      if (element) {
        let i = 0;
        setTimeout(() => {
          const interval = setInterval(() => {
            if (i < text.length) {
              element.innerHTML += text.charAt(i);
              i++;
            } else {
              clearInterval(interval);
            }
          }, 100);
        }, delay);
      }
    }
  }
}
