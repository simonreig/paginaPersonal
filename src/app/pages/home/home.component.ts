import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }



  facebook(){
    window.location.href='https://www.facebook.com/simon.reig/';
  }

  instagram(){
    window.location.href='https://www.instagram.com/simonreig/?hl=es-la';
  }

  linkedin(){
    window.location.href='https://www.linkedin.com/in/sim%C3%B3n-reig-b617391b8/';
  }

  git(){
    window.location.href='https://github.com/simonreig';
  }
}
