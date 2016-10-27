import { Component } from '@angular/core';
import { Champion } from './model/champion';
import { ChampionService } from './app.service';

@Component({
  selector: 'my-lol-champs',
  templateUrl: './app/myLoLChamps.component.html',
  providers: [ChampionService]
})
export class AppComponent { 
  champions : Champion[] = [];

  constructor(private _service : ChampionService) { 
    console.log("Constructor");
    this.champions = _service.getAll();
  }
}