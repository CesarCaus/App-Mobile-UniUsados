import { Component } from '@angular/core';
import { OpenMenuService } from '../../../open-menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-open',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-open.component.html',
  styleUrl: './menu-open.component.scss'
})

export class MenuOpenComponent {
  constructor(public openMenuService: OpenMenuService) {}
}