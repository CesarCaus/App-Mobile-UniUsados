import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-user',
  standalone: true,
  imports: [],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.scss'
})
export class InfoUserComponent {

  constructor(private router: Router) {}
  
  paginavendedor() {
    this.router.navigate(['/pagina-vendedor']);
  }

   
  historico() {
    this.router.navigate(['/historico']);
  }

}
