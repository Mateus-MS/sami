import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input() name!: string;
  @Input() price!: string;
  @Input() cifra!: string;

  @Input() test!: string;

}
