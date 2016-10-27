import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestHttp } from '../servicios/rest.http';
import { Champion } from '../model/champion.model';
import { TimestampToDatePipe } from '../pipes/timestamp-to-date.pipe';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    providers: [TimestampToDatePipe],
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    conexion : String;
    champs : Champion[];
    errorMessage : String;

    constructor(private router : Router, private services : RestHttp) { 
        console.log("Entrando en DashboardComponent");
    }

    ngOnInit() { 
        this.conexion = "Estoy conectado al Dashboard";
        
        this.services.getAllChamps()
            .subscribe(
                result => this.champs = result,
                error => this.errorMessage = <any>error
            );

    }

    selectedChampion(champId : Number) {
        this.router.navigate(['/dashboard', champId]);
    }
}