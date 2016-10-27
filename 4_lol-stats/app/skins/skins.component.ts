import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { RestHttp }       from '../servicios/rest.http';
import { Skin }           from '../model/skin.model';
// Skins: http://lolskingenerator.com/

@Component({
    moduleId: module.id,
    selector: 'skins',
    templateUrl: 'skins.component.html'
})
export class SkinsComponent implements OnInit, AfterViewChecked {
    @Input() championId : String;
    skins? : Skin[];

    constructor(private servicios : RestHttp) { 
        this.skins = null;
    }

    ngOnInit() { 
        console.log("Mira mi championId es: " + this.championId);
    }

    ngAfterViewChecked() {
        if(this.championId != '0') {
            console.log("En el checkd mi champion es: " + this.championId);

            if(this.skins == null) {
                this.servicios.getSkins(this.championId).subscribe(
                    result => {
                        this.skins = result;
                    }
                )
            }

            
        }
    }
}