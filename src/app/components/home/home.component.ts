import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})


export class HomeComponent implements OnInit {
  informacion= {
    mensaje: 'COMIC APP',
    frase: 'Esta es una aplicacion de comics',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
