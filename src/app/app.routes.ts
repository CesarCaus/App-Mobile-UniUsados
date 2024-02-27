import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientInterfaceComponent } from './components/client-interface/client-interface.component';
import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { LoadComponent } from './components/client-interface/load/load.component';
import { PaginaVendedorComponent } from './components/pagina-vendedor/pagina-vendedor.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ItemComponent } from './components/item/item.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientInterface', component: ClientInterfaceComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: ClientInterfaceComponent },
    { path: 'pagamento', component: PagamentoComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'info-user', component: InfoUserComponent },
    { path: 'load', component: LoadComponent },
    { path: 'pagina-vendedor', component: PaginaVendedorComponent},
    { path: 'historico', component: HistoricoComponent },
    { path: 'item', component: ItemComponent }
];

@NgModule ({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}