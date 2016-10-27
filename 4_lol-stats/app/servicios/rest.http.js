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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
//http://www.lolking.net/images/v2/champions/icons/size100x100/81.png
var RestHttp = (function () {
    function RestHttp(http) {
        this.http = http;
        this.backendUrl = 'http://localhost:8000'; // URL to web API
    }
    RestHttp.prototype.addSkin = function (skin) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = {
            "id": skin.id,
            "championId": skin.championId,
            "skinUrl": skin.skinUrl,
            "skinName": skin.skinName
        };
        return this.http.post(this.backendUrl + '/skins', body, headers)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestHttp.prototype.getSkins = function (championId) {
        return this.http.get(this.backendUrl + "/skins?championId=" + championId)
            .map(this.extractSkins)
            .catch(this.handleError);
    };
    RestHttp.prototype.getMyGames = function () {
        return this.http.get(this.backendUrl + "/games")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestHttp.prototype.getChamp = function (id) {
        return this.http.get(this.backendUrl + "/champions/" + id)
            .map(this.extractChampion)
            .catch(this.handleError);
    };
    RestHttp.prototype.getAllChamps = function () {
        return this.http.get(this.backendUrl + "/champions")
            .map(this.extractChampions)
            .catch(this.handleError);
    };
    RestHttp.prototype.extractChampion = function (res) {
        return JSON.parse(JSON.stringify(res.json()));
    };
    RestHttp.prototype.extractSkins = function (res) {
        var body = res.json();
        return JSON.parse(JSON.stringify(body));
    };
    RestHttp.prototype.extractChampions = function (res) {
        var body = res.json();
        return JSON.parse(JSON.stringify(body));
    };
    RestHttp.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RestHttp.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    RestHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestHttp);
    return RestHttp;
}());
exports.RestHttp = RestHttp;
//# sourceMappingURL=rest.http.js.map