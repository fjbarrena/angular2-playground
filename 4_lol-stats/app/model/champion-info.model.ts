export class ChampionInfo {
    defense : Number;
    magic : Number;
    difficulty : Number;
    attack : Number;

    constructor(defense : Number, magic : Number, difficulty : Number, attack : Number) {
        this.defense = defense;
        this.magic = magic;
        this.difficulty = difficulty;
        this.attack = attack;
    }
}