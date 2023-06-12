import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const options = {
      strings: ['Devellopement web ', 'Devellopement mobile'],
      typeSpeed: 70, // Vitesse de frappe (en millisecondes)
      showCursor: true, // Afficher le curseur de frappe
      cursorChar: '_', // Caractère du curseur de frappe
    };
  
    const typed = new Typed('#typed-text', options);
  }


  ngAfterViewInit(){
    const options = {
      strings: ['Devellopement web ', 'Devellopement mobile'],
      typeSpeed: 70, // Vitesse de frappe (en millisecondes)
      showCursor: true, // Afficher le curseur de frappe
      cursorChar: '_', // Caractère du curseur de frappe
    };

    const typed = new Typed(this.elementRef.nativeElement.querySelector('#typed-text'), options);
  }
  }

