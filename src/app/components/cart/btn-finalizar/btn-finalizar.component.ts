import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-finalizar',
  standalone: true,
  imports: [],
  templateUrl: './btn-finalizar.component.html',
  styleUrl: './btn-finalizar.component.scss'
})
export class BtnFinalizarComponent {
  constructor(private router: Router) {}
  
  pagamento() {
    this.router.navigate(['/pagamento']);
  }
}
