import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  styles :[
    `
    .bg-purple{
      background-color : #744AF6;
    }
    `
  ],
})
export class HeaderComponent {
  title = 'My Store';

  myClasses = {
    'bg-primary' : true,
    'bg-warning' : false
  }

    showNavbar = false;

  currentTheme = 'primary';
  toggleTheme(): void{
    if(this.currentTheme === 'primary'){
      this.currentTheme = 'purple';
      this.myClasses = {
        'bg-primary' : false,
        'bg-warning' : true
      }
    }
    else{
      this.currentTheme = 'primary';
      this.myClasses = {
        'bg-primary' : true,
        'bg-warning' : false
      }
    }
  }

  toggleNavbar():void{
    this.showNavbar = !this.showNavbar;
  }
}
