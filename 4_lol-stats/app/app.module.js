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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./routing/app-routing.module');
var rest_http_1 = require('./servicios/rest.http');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var games_component_1 = require('./games/games.component');
var stats_component_1 = require('./stats/stats.component');
var champdetail_component_1 = require('./dashboard/champdetail.component');
var app_component_1 = require('./app.component');
var timestamp_to_date_pipe_1 = require('./pipes/timestamp-to-date.pipe');
var skins_component_1 = require('./skins/skins.component');
var new_skin_component_1 = require('./skins/new-skin.component');
var marvel_component_1 = require('./marvel/marvel.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                timestamp_to_date_pipe_1.TimestampToDatePipe,
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                games_component_1.GamesComponent,
                stats_component_1.StatsComponent,
                champdetail_component_1.ChampionDetailComponent,
                skins_component_1.SkinsComponent,
                new_skin_component_1.NewSkinComponent,
                marvel_component_1.MarvelComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [rest_http_1.RestHttp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map