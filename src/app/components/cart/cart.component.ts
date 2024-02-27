import { Component } from '@angular/core';
import { BtnFinalizarComponent } from './btn-finalizar/btn-finalizar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BtnFinalizarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 
}
