import { Component } from '@angular/core';
import { CardCollectionComponent } from './card-collection/card-collection.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CardCollectionComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {

}
