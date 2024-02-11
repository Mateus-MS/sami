import { Component, ElementRef } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-middle',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.css'
})
export class MiddleComponent {

  selected: number | undefined;

  constructor(private el: ElementRef){
    
  }

  close(index: number): void{
    
    //Se for o primeiro elemento a ser aberto
    if(this.selected === undefined){
      this.selected = index;
      return
    }

    //Se for o atualmente aberto
    if(this.selected === index){
      return
    }

    //Se for um diferente do que está aberto

    //Fecha o que antes estava aberto
    this.el.nativeElement.children[this.selected].children[0].open = false
    
    //Atualiza o valor para o que esta atualmente aberto
    this.selected = index

  }

}
