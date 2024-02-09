import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, CardComponent, CollectionComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'sami'

  copyText(){

    navigator.clipboard.writeText('Praça Humbert Delgado')

  }

}
