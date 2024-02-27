import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-itens',
  standalone: true,
  imports: [],
  templateUrl: './new-itens.component.html',
  styleUrl: './new-itens.component.scss'
})
export class NewItensComponent {
  constructor(private router: Router) {}

  item() {
    this.router.navigate(['/item']);
  }
}
