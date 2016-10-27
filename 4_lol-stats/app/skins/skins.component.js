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
var rest_http_1 = require('../servicios/rest.http');
// Skins: http://lolskingenerator.com/
var SkinsComponent = (function () {
    function SkinsComponent(servicios) {
        this.servicios = servicios;
        this.skins = null;
    }
    SkinsComponent.prototype.ngOnInit = function () {
        console.log("Mira mi championId es: " + this.championId);
    };
    SkinsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.championId != '0') {
            console.log("En el checkd mi champion es: " + this.championId);
            if (this.skins == null) {
                this.servicios.getSkins(this.championId).subscribe(function (result) {
                    _this.skins = result;
                });
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SkinsComponent.prototype, "championId", void 0);
    SkinsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'skins',
            templateUrl: 'skins.component.html'
        }), 
        __metadata('design:paramtypes', [rest_http_1.RestHttp])
    ], SkinsComponent);
    return SkinsComponent;
}());
exports.SkinsComponent = SkinsComponent;
//# sourceMappingURL=skins.component.js.map