"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var rest_http_1 = require('../servicios/rest.http');
var timestamp_to_date_pipe_1 = require('../pipes/timestamp-to-date.pipe');
var DashboardComponent = (function () {
    function DashboardComponent(router, services) {
        this.router = router;
        this.services = services;
        console.log("Entrando en DashboardComponent");
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conexion = "Estoy conectado al Dashboard";
        this.services.getAllChamps()
            .subscribe(function (result) { return _this.champs = result; }, function (error) { return _this.errorMessage = error; });
    };
    DashboardComponent.prototype.selectedChampion = function (champId) {
        this.router.navigate(['/dashboard', champId]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            providers: [timestamp_to_date_pipe_1.TimestampToDatePipe],
            templateUrl: 'dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, rest_http_1.RestHttp])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map