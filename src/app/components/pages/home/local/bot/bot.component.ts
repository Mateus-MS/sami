import { Component } from '@angular/core';
import { CollectionComponent } from './collection/collection.component';
import { FooterComponent } from './footer/footer.component';
import { NavGhostComponent } from '../../../global/navbar/nav-ghost/nav-ghost.component';

@Component({
  selector: 'app-bot',
  standalone: true,
  imports: [CollectionComponent, FooterComponent, NavGhostComponent],
  templateUrl: './bot.component.html',
  styleUrl: './bot.component.css'
})
export class BotComponent {

}
