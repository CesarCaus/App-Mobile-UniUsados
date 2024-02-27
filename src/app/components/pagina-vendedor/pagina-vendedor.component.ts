import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-vendedor',
  standalone: true,
  imports: [],
  templateUrl: './pagina-vendedor.component.html',
  styleUrl: './pagina-vendedor.component.scss'
})
export class PaginaVendedorComponent {
  constructor(private router: Router) {}
  
  return() {
    this.router.navigate(['/info-user']);
  }
}
