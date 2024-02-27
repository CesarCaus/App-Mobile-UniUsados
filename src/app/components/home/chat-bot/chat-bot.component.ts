import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [ChatComponent,
  CommonModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  mostrarComponente = false;

  toggleComponent() {
    this.mostrarComponente = !this.mostrarComponente;
  }
}
