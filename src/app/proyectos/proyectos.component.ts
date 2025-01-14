import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  constructor() { }

  ngOnInit(): void {
    this.observeItems();
  }

  observeItems(): void {
    if (typeof document !== 'undefined') {
      const items = document.querySelectorAll('.item-proyecto');

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

}
