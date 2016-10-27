import { Component } from '@angular/core';
import { OnInit, OnDestroy, OnChanges, DoCheck, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App {{insulto}}</h1>'
})
export class AppComponent implements OnInit, OnDestroy /*, OnChanges, DoCheck, AfterViewChecked, AfterViewInit */ { 
  insulto = "Yippy Kay Yey Motherfucker";
  
  constructor() { 
    console.log("Constructor");
  }

  ngOnInit()    { 
    console.log("OnInit");
   }

  ngOnDestroy() { 
    console.log("OnDestroy"); 
  }

}
