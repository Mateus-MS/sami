import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {

  @Input() collection!:string;
  @Input() image_path!:string;

}
