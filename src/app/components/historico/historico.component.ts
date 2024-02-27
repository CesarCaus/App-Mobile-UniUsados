import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export class HistoricoComponent {

  // Variável para rastrear o estado do lightbox
  lightbox = false;

  exibirLightBox() {
    this.lightbox = true;
  }

  closeLightBox() {
    this.lightbox = false;
  }

  constructor(private router: Router) {}

  return() {
    this.router.navigate(['/info-user']);
  }
  
}
