import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OpenMenuService {
  private menuVisible: boolean = true;

  constructor() {}

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  isMenuVisible(): boolean {
    return this.menuVisible;
  }
}