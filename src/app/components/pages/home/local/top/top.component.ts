import { Component } from '@angular/core';
import { NavGhostComponent } from '../../../global/navbar/nav-ghost/nav-ghost.component';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [NavGhostComponent, BannerComponent, ProductsComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

}
