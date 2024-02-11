import { Component } from '@angular/core';
import { NavbarComponent } from '../global/navbar/navbar.component';
import { TopComponent } from './local/top/top.component';
import { BotComponent } from './local/bot/bot.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, TopComponent, BotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
