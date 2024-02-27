import { Component } from '@angular/core';
import { OpenMenuService } from '../../../open-menu.service';

@Component({
  selector: 'app-menu-sup',
  standalone: true,
  imports: [],
  templateUrl: './menu-sup.component.html',
  styleUrl: './menu-sup.component.scss'
})
export class MenuSupComponent {

  constructor(private openMenuService: OpenMenuService) {}

  toggleMenu(): void {
    this.openMenuService.toggleMenu();
  }
  
}
