import { Component } from '@angular/core';
import { ChatBotComponent } from '../home/chat-bot/chat-bot.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ChatBotComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
