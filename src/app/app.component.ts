import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LogoComponent } from './components/logo/logo.component';
import { MiddleComponent } from './components/middle/middle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, CardComponent, CollectionComponent, DropdownComponent, LogoComponent, MiddleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'sami'

  copyText(){

    navigator.clipboard.writeText('Praça Humbert Delgado')

  }

}
