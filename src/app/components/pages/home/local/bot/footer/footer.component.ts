import { Component } from '@angular/core';
import { MiddleComponent } from './middle/middle.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LeftComponent, MiddleComponent, RightComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
