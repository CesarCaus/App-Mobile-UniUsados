import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  constructor(private router: Router) {}

  item() {
    this.router.navigate(['/item']);
  }
}
