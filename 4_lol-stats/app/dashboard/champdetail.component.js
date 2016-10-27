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
var common_1 = require('@angular/common');
var rest_http_1 = require('../servicios/rest.http');
var champion_model_1 = require('../model/champion.model');
var champion_info_model_1 = require('../model/champion-info.model');
var ChampionDetailComponent = (function () {
    function ChampionDetailComponent(route, location, service) {
        this.route = route;
        this.location = location;
        this.service = service;
        console.log("Entrando en ChampionDetailComponent");
        this.initPassed = false;
        // Ojo con esta inicialización. Explicar el Elvis Operator.
        this.champ = new champion_model_1.Champion(0, "", "", "", new champion_info_model_1.ChampionInfo(0, 0, 0, 0));
    }
    ChampionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        var currentSubscription;
        console.log("Entrando en init");
        this.conexion = "bonita";
        this.route.params.subscribe(function (params) {
            id = +params['id']; // (+) converts string 'id' to a number
            _this.service.getChamp(id)
                .subscribe(function (resultado) {
                _this.champ = resultado;
            });
        });
    };
    ChampionDetailComponent.prototype.ngOnDestroy = function () {
        //this.routeSubscription.unsuscribe();
    };
    ChampionDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'champ-detail',
            templateUrl: 'champdetail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, rest_http_1.RestHttp])
    ], ChampionDetailComponent);
    return ChampionDetailComponent;
}());
exports.ChampionDetailComponent = ChampionDetailComponent;
//# sourceMappingURL=champdetail.component.js.map