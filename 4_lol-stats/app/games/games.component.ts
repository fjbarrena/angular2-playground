import { Component, OnInit } from '@angular/core';
import { RestHttp } from '../servicios/rest.http';
@Component({
    moduleId: module.id,
    selector: 'my-games',
    templateUrl: 'mygames.component.html',
    providers: [RestHttp]
})
export class GamesComponent implements OnInit {
    conexion : String;
    errorMessage : String;
    constructor(private restHttp : RestHttp) { 
        console.log("Entrando en DashboardComponent");
    }

    ngOnInit() { 
        this.conexion = "Estoy conectado a Mis Partidas";

        this.restHttp.getMyGames()
                     .subscribe(
                       games => this.handleSuccess(games),
                       error => this.errorMessage = <any>error);
    }

    private handleSuccess(games : String[]) {
        this.conexion = JSON.stringify(games);
    }
}