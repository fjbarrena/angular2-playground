import { Champion } from './model/champion'
import { Injectable } from '@angular/core';

@Injectable()
export class ChampionService {
    getAll() : Champion[] {
        var champs : Champion[] = [];

        champs[0] = new Champion("Anivia", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Anivia.png");
        champs[1] = new Champion("Annie", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Annie.png");
        champs[2] = new Champion("Lux", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Lux.png");
        champs[3] = new Champion("Swain", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Swain.png");
        champs[4] = new Champion("Ziggs", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Ziggs.png");
        champs[5] = new Champion("Zilean", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Zilean.png");
        champs[6] = new Champion("Mordekaiser", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Mordekaiser.png");
        champs[7] = new Champion("LeBlanc", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Leblanc.png");
        champs[8] = new Champion("Akali", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Akali.png");
        champs[9] = new Champion("Draven", "https://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Draven.png");
    
        return champs;
    }

}