export class Skin {
    id : Number;
    championId : Number;
    skinUrl : String;
    skinName : String;
    
    constructor(id : Number, championId : Number, skinUrl : String, skinName : String) {
        this.id = id;
        this.championId = championId;
        this.skinUrl = skinUrl;
        this.skinName = skinName;
    }
}