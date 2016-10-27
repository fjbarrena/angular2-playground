import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'stats',
    templateUrl: 'stats.component.html'
})
export class StatsComponent implements OnInit {
    conexion : String;
    constructor() { 
        console.log("Entrando en DashboardComponent");
    }

    ngOnInit() { 
        this.conexion = "Estoy conectado a Mis Estadísticas";
    }
}