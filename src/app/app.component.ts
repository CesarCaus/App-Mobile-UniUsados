import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routes';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { InfoUserComponent } from './components/info-user/info-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    AppRoutingModule,
    FooterComponent,
    PagamentoComponent,
    CadastroComponent,
    InfoUserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UniUsados';
}
