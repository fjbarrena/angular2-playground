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
var dashboard_component_1 = require('../dashboard/dashboard.component');
var champdetail_component_1 = require('../dashboard/champdetail.component');
var games_component_1 = require('../games/games.component');
var stats_component_1 = require('../stats/stats.component');
var new_skin_component_1 = require('../skins/new-skin.component');
var marvel_component_1 = require('../marvel/marvel.component');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                    { path: 'stats', component: stats_component_1.StatsComponent },
                    { path: 'games', component: games_component_1.GamesComponent },
                    { path: 'dashboard/:id', component: champdetail_component_1.ChampionDetailComponent },
                    { path: 'newSkin', component: new_skin_component_1.NewSkinComponent },
                    { path: 'marvel', component: marvel_component_1.MarvelComponent },
                    { path: '**', redirectTo: 'dashboard' }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map