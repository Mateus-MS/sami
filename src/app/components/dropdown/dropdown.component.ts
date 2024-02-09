import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface list{
  icon_path: string;
  text: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  @Input() summary!: string;

  @Input() itens!: list[];

}
