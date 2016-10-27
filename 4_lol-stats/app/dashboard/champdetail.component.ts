import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { RestHttp }                 from '../servicios/rest.http';
import { Champion } from '../model/champion.model';
import { ChampionInfo } from '../model/champion-info.model';

@Component({
    moduleId: module.id,
    selector: 'champ-detail',
    templateUrl: 'champdetail.component.html'
})
export class ChampionDetailComponent implements OnInit, OnDestroy {
    conexion : String;
    champ : Champion;

    private initPassed : Boolean;
    private routeSubscription : any;

    constructor(private route: ActivatedRoute, private location: Location, 
        private service : RestHttp) { 
        console.log("Entrando en ChampionDetailComponent");
        this.initPassed = false;

        // Ojo con esta inicialización. Explicar el Elvis Operator.
        this.champ = new Champion(0,"", "", "", 
            new ChampionInfo(0,0,0,0));
    }

    ngOnInit() {
        let id : Number;
        var currentSubscription : any;
        
        console.log("Entrando en init");
        this.conexion = "bonita";
        
        this.route.params.subscribe(params => {
            id = +params['id']; // (+) converts string 'id' to a number
        
            this.service.getChamp(id)
                    .subscribe(
                        resultado => {
                            this.champ = resultado;
                        }
                    );
        });
    }

    ngOnDestroy() {
        //this.routeSubscription.unsuscribe();
    }
}