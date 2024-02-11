import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {

  copyText(){

    navigator.clipboard.writeText('Praça Humbert Delgado')

  }

}
