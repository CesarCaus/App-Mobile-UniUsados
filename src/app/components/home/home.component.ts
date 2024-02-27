import { Component } from '@angular/core';
import { MenuSupComponent } from './menu-sup/menu-sup.component';
import { MenuOpenComponent } from './menu-open/menu-open.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { NewItensComponent } from './new-itens/new-itens.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { InfoUserComponent } from '../info-user/info-user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuSupComponent,
    MenuOpenComponent,
    AnnouncementComponent,
    NewItensComponent,
    ChatBotComponent, 
    InfoUserComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
