import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header-component',
  imports: [CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
   links = [
    {label:'Home',href:'#home'},
    {label:'Work',href:'#work'},
    {label:'Projects',href:'#projects'},
    {label:'Skills',href:'#skills'},
    {label:'Info',href:'#contact-info'}

  ];
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
