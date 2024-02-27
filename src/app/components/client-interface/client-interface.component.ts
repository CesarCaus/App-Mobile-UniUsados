import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-client-interface',
  standalone: true,
  imports: [],
  templateUrl: './client-interface.component.html',
  styleUrl: './client-interface.component.scss'
})
export class ClientInterfaceComponent {

  constructor(private router: Router) {}
  
  cadastro() {
    this.router.navigate(['/cadastro']);
  }

  informacoes() {
    this.router.navigate(['/load']);
  
    const intervalId = setInterval(() => {
      // Navegar para a rota '/info-user'
      this.router.navigate(['/info-user']);
    }, 1000);
  
    // Parar o intervalo ao navegar para outra rota
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        clearInterval(intervalId);
      }
    });
  }

}
