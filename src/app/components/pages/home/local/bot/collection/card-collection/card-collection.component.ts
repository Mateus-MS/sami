import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.css'
})
export class CardCollectionComponent {

  @Input() collection!:string;
  @Input() image_path!:string;


}
