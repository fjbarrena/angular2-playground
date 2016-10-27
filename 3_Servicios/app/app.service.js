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
var champion_1 = require('./model/champion');
var core_1 = require('@angular/core');
var ChampionService = (function () {
    function ChampionService() {
    }
    ChampionService.prototype.getAll = function () {
        var champs = [];
        champs[0] = new champion_1.Champion("Anivia", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Anivia.png");
        champs[1] = new champion_1.Champion("Annie", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Annie.png");
        champs[2] = new champion_1.Champion("Lux", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Lux.png");
        champs[3] = new champion_1.Champion("Swain", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Swain.png");
        champs[4] = new champion_1.Champion("Ziggs", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Ziggs.png");
        champs[5] = new champion_1.Champion("Zilean", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Zilean.png");
        champs[6] = new champion_1.Champion("Mordekaiser", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Mordekaiser.png");
        champs[7] = new champion_1.Champion("LeBlanc", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Leblanc.png");
        champs[8] = new champion_1.Champion("Akali", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Akali.png");
        champs[9] = new champion_1.Champion("Draven", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Draven.png");
        return champs;
    };
    ChampionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChampionService);
    return ChampionService;
}());
exports.ChampionService = ChampionService;
//# sourceMappingURL=app.service.js.map