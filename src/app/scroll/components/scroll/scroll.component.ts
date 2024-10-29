import { Component, HostListener, OnInit } from '@angular/core';
import { SectionComponent } from "../section/section.component";

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.css',
  host: {
    '(window:wheel)':'onScroll($event)'
  }
})
export default class ScrollComponent implements OnInit {
  private sections: HTMLElement[] = [];
  private currentSection: number = 0;
  private isScrolling: boolean = false;

  ngOnInit(): void {
    // Selecciona todas las secciones
    this.sections = Array.from(document.querySelectorAll('.seccion'));
  }

  //@HostListener('window:wheel', ['$event'])
  private onScroll(event: WheelEvent): void {
    if (this.isScrolling) return;

    if (event.deltaY > 0) {
      // Desplazamiento hacia abajo
      if (this.currentSection < this.sections.length - 1) {
        this.currentSection++;
        this.scrollToSection(this.currentSection);
      }
    } else {
      // Desplazamiento hacia arriba
      if (this.currentSection > 0) {
        this.currentSection--;
        this.scrollToSection(this.currentSection);
      }
    }

    this.isScrolling = true;
    setTimeout(() => {
      this.isScrolling = false;
    }, 800); // Ajusta el tiempo según la duración deseada
  }

  private scrollToSection(index: number): void {
    this.sections[index].scrollIntoView({ behavior: 'smooth' });
  }
}
