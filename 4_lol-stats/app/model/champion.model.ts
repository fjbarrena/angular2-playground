import { ChampionInfo } from './champion-info.model';

export class Champion {
    id : Number;
    title : String;
    name : String;
    key : String;

    info : ChampionInfo;
    
    constructor(id : Number, title : String, 
        name : String, key : String, info : ChampionInfo) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.key = key;
        this.info = info;
    }
}