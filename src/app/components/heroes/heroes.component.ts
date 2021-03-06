import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: any = {};

  constructor(private servicioHeroes: HeroesService) { 
    this.heroes = servicioHeroes.getHeroes();
    console.log(this.heroes);
  }

  ngOnInit(): void {
  }

}
