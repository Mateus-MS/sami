import { Component, ElementRef } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  constructor(private el: ElementRef){}

  ngOnInit(): void{

    let top_section : Element  | null = document.getElementById('top')

    if(top_section === undefined || top_section === null) return

    let onScreen: number;

    let observer = new IntersectionObserver(entries =>{

      onScreen = entries[0].intersectionRatio

      if(onScreen >= .5){
        this.el.nativeElement.style.setProperty('--background-color', 'var(--black)')
        this.el.nativeElement.style.setProperty('--items-color', 'var(--white)')
      } else {
        this.el.nativeElement.style.setProperty('--background-color', 'var(--white)')
        this.el.nativeElement.style.setProperty('--items-color', 'var(--black)')
      }

    }, {threshold: .5})

    observer.observe(top_section)

  }

}
