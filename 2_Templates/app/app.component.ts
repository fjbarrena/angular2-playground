import { Component } from '@angular/core';

@Component({
  selector: 'my-lol-games',
  templateUrl: './app/myLoLGames.component.html'
})
export class AppComponent { 
  constructor() { 
    console.log("Constructor");
  }

  ngOnInit()    { 
    console.log("OnInit");
   }

  ngOnDestroy() { 
    console.log("OnDestroy"); 
  }

  selectedGame(game : Object) {
    console.log(game);
  }

  misPartidas = 
   [
      {
         "fellowPlayers": [
            {
               "championId": 81,
               "teamId": 200,
               "summonerId": 50920492
            },
            {
               "championId": 64,
               "teamId": 100,
               "summonerId": 25961648
            },
            {
               "championId": 25,
               "teamId": 200,
               "summonerId": 48834235
            },
            {
               "championId": 11,
               "teamId": 200,
               "summonerId": 39658936
            },
            {
               "championId": 111,
               "teamId": 100,
               "summonerId": 63407064
            },
            {
               "championId": 412,
               "teamId": 200,
               "summonerId": 207437
            },
            {
               "championId": 82,
               "teamId": 100,
               "summonerId": 46443920
            },
            {
               "championId": 18,
               "teamId": 100,
               "summonerId": 53117340
            },
            {
               "championId": 238,
               "teamId": 100,
               "summonerId": 79688106
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 21962,
            "item2": 3117,
            "goldEarned": 12585,
            "item1": 3040,
            "wardPlaced": 9,
            "item0": 3027,
            "totalDamageTaken": 18839,
            "physicalDamageDealtPlayer": 22240,
            "killingSprees": 2,
            "playerRole": 4,
            "totalUnitsHealed": 1,
            "playerPosition": 2,
            "largestCriticalStrike": 490,
            "level": 17,
            "totalDamageDealtToBuildings": 10631,
            "magicDamageDealtToChampions": 20633,
            "turretsKilled": 3,
            "magicDamageDealtPlayer": 87924,
            "neutralMinionsKilledEnemyJungle": 2,
            "assists": 17,
            "magicDamageTaken": 3550,
            "numDeaths": 2,
            "totalTimeCrowdControlDealt": 1199,
            "largestMultiKill": 1,
            "physicalDamageTaken": 14963,
            "team": 200,
            "win": true,
            "totalDamageDealt": 110164,
            "largestKillingSpree": 3,
            "totalHeal": 7232,
            "item4": 1026,
            "item3": 3285,
            "item6": 3340,
            "minionsKilled": 146,
            "timePlayed": 1963,
            "physicalDamageDealtToChampions": 1328,
            "championsKilled": 5,
            "trueDamageTaken": 326,
            "goldSpent": 11050,
            "neutralMinionsKilled": 2
         },
         "gameId": 2890339121,
         "ipEarned": 92,
         "spell1": 4,
         "teamId": 200,
         "spell2": 12,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476747676144,
         "championId": 34
      },
      {
         "fellowPlayers": [
            {
               "championId": 34,
               "teamId": 200,
               "summonerId": 65809012
            },
            {
               "championId": 150,
               "teamId": 100,
               "summonerId": 83608008
            },
            {
               "championId": 78,
               "teamId": 200,
               "summonerId": 80437761
            },
            {
               "championId": 37,
               "teamId": 200,
               "summonerId": 19645615
            },
            {
               "championId": 5,
               "teamId": 100,
               "summonerId": 86110103
            },
            {
               "championId": 126,
               "teamId": 200,
               "summonerId": 34001819
            },
            {
               "championId": 222,
               "teamId": 100,
               "summonerId": 34171032
            },
            {
               "championId": 201,
               "teamId": 100,
               "summonerId": 43060035
            },
            {
               "championId": 22,
               "teamId": 200,
               "summonerId": 84599137
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 18102,
            "item2": 1001,
            "goldEarned": 7457,
            "item1": 3165,
            "wardPlaced": 9,
            "totalDamageTaken": 15374,
            "item0": 1056,
            "physicalDamageDealtPlayer": 13745,
            "killingSprees": 1,
            "playerRole": 4,
            "totalUnitsHealed": 1,
            "playerPosition": 2,
            "largestCriticalStrike": 45,
            "level": 12,
            "totalDamageDealtToBuildings": 950,
            "magicDamageDealtToChampions": 17509,
            "magicDamageDealtPlayer": 61752,
            "assists": 2,
            "magicDamageTaken": 7564,
            "numDeaths": 7,
            "totalTimeCrowdControlDealt": 118,
            "largestMultiKill": 1,
            "physicalDamageTaken": 7479,
            "win": false,
            "team": 100,
            "totalDamageDealt": 75497,
            "largestKillingSpree": 2,
            "totalHeal": 689,
            "item4": 3010,
            "item3": 3113,
            "item6": 3340,
            "minionsKilled": 119,
            "timePlayed": 1527,
            "physicalDamageDealtToChampions": 592,
            "championsKilled": 3,
            "trueDamageTaken": 330,
            "goldSpent": 5800
         },
         "gameId": 2889956204,
         "ipEarned": 51,
         "spell1": 4,
         "teamId": 100,
         "spell2": 12,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476728086416,
         "championId": 1
      },
      {
         "fellowPlayers": [
            {
               "championId": 35,
               "teamId": 200,
               "summonerId": 33412064
            },
            {
               "championId": 412,
               "teamId": 200,
               "summonerId": 72610215
            },
            {
               "championId": 236,
               "teamId": 100,
               "summonerId": 21143640
            },
            {
               "championId": 157,
               "teamId": 100,
               "summonerId": 60227052
            },
            {
               "championId": 30,
               "teamId": 100,
               "summonerId": 25234747
            },
            {
               "championId": 24,
               "teamId": 100,
               "summonerId": 53218451
            },
            {
               "championId": 54,
               "teamId": 200,
               "summonerId": 62657197
            },
            {
               "championId": 202,
               "teamId": 200,
               "summonerId": 88737008
            },
            {
               "championId": 12,
               "teamId": 100,
               "summonerId": 52655794
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 43567,
            "item2": 3089,
            "goldEarned": 18696,
            "item1": 3165,
            "wardPlaced": 18,
            "item0": 3285,
            "totalDamageTaken": 22973,
            "trueDamageDealtPlayer": 1110,
            "physicalDamageDealtPlayer": 19411,
            "trueDamageDealtToChampions": 315,
            "killingSprees": 5,
            "playerRole": 4,
            "totalUnitsHealed": 1,
            "bountyLevel": 3,
            "playerPosition": 2,
            "largestCriticalStrike": 123,
            "level": 18,
            "doubleKills": 2,
            "neutralMinionsKilledYourJungle": 12,
            "totalDamageDealtToBuildings": 6967,
            "magicDamageDealtToChampions": 42360,
            "turretsKilled": 1,
            "magicDamageDealtPlayer": 182150,
            "assists": 19,
            "magicDamageTaken": 11355,
            "numDeaths": 7,
            "totalTimeCrowdControlDealt": 175,
            "largestMultiKill": 2,
            "physicalDamageTaken": 10701,
            "team": 200,
            "win": true,
            "totalDamageDealt": 202671,
            "largestKillingSpree": 3,
            "totalHeal": 3114,
            "item4": 3027,
            "item3": 3020,
            "item6": 3340,
            "item5": 3102,
            "minionsKilled": 193,
            "timePlayed": 2570,
            "physicalDamageDealtToChampions": 892,
            "championsKilled": 17,
            "trueDamageTaken": 916,
            "goldSpent": 16650,
            "neutralMinionsKilled": 12
         },
         "gameId": 2889914168,
         "ipEarned": 265,
         "spell1": 4,
         "teamId": 200,
         "spell2": 12,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476725908102,
         "championId": 1
      },
      {
         "fellowPlayers": [
            {
               "championId": 412,
               "teamId": 200,
               "summonerId": 82747149
            },
            {
               "championId": 113,
               "teamId": 100,
               "summonerId": 28906196
            },
            {
               "championId": 51,
               "teamId": 100,
               "summonerId": 22567144
            },
            {
               "championId": 5,
               "teamId": 200,
               "summonerId": 39231919
            },
            {
               "championId": 222,
               "teamId": 200,
               "summonerId": 86517710
            },
            {
               "championId": 31,
               "teamId": 200,
               "summonerId": 20707787
            },
            {
               "championId": 40,
               "teamId": 100,
               "summonerId": 82571042
            },
            {
               "championId": 114,
               "teamId": 100,
               "summonerId": 71389371
            },
            {
               "championId": 268,
               "teamId": 100,
               "summonerId": 83787874
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 29404,
            "item2": 3117,
            "barracksKilled": 1,
            "goldEarned": 11873,
            "item1": 1011,
            "wardPlaced": 9,
            "item0": 3165,
            "totalDamageTaken": 14048,
            "trueDamageDealtPlayer": 980,
            "physicalDamageDealtPlayer": 12503,
            "trueDamageDealtToChampions": 188,
            "killingSprees": 2,
            "playerRole": 4,
            "totalUnitsHealed": 1,
            "bountyLevel": 2,
            "playerPosition": 2,
            "largestCriticalStrike": 95,
            "level": 14,
            "neutralMinionsKilledYourJungle": 1,
            "totalDamageDealtToBuildings": 9837,
            "magicDamageDealtToChampions": 28198,
            "turretsKilled": 1,
            "magicDamageDealtPlayer": 74754,
            "assists": 11,
            "magicDamageTaken": 7861,
            "numDeaths": 6,
            "totalTimeCrowdControlDealt": 150,
            "largestMultiKill": 1,
            "physicalDamageTaken": 5840,
            "team": 200,
            "win": true,
            "totalDamageDealt": 88237,
            "largestKillingSpree": 4,
            "totalHeal": 1199,
            "item4": 3027,
            "item3": 3285,
            "item6": 3340,
            "minionsKilled": 80,
            "timePlayed": 1900,
            "wardKilled": 1,
            "physicalDamageDealtToChampions": 1018,
            "championsKilled": 10,
            "trueDamageTaken": 345,
            "goldSpent": 11200,
            "neutralMinionsKilled": 1
         },
         "gameId": 2888424899,
         "ipEarned": 239,
         "spell1": 4,
         "teamId": 200,
         "spell2": 12,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476634144017,
         "championId": 1
      },
      {
         "fellowPlayers": [
            {
               "championId": 24,
               "teamId": 100,
               "summonerId": 44218711
            },
            {
               "championId": 245,
               "teamId": 200,
               "summonerId": 58479149
            },
            {
               "championId": 412,
               "teamId": 100,
               "summonerId": 39312381
            },
            {
               "championId": 222,
               "teamId": 100,
               "summonerId": 72780749
            },
            {
               "championId": 266,
               "teamId": 200,
               "summonerId": 57197103
            },
            {
               "championId": 202,
               "teamId": 200,
               "summonerId": 60102236
            },
            {
               "championId": 26,
               "teamId": 200,
               "summonerId": 81056875
            },
            {
               "championId": 11,
               "teamId": 200,
               "summonerId": 77358564
            },
            {
               "championId": 126,
               "teamId": 100,
               "summonerId": 79638897
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 19478,
            "item2": 3027,
            "goldEarned": 10093,
            "item1": 1011,
            "wardPlaced": 6,
            "item0": 3165,
            "totalDamageTaken": 20084,
            "trueDamageDealtPlayer": 180,
            "physicalDamageDealtPlayer": 8754,
            "trueDamageDealtToChampions": 160,
            "killingSprees": 2,
            "playerRole": 4,
            "totalUnitsHealed": 1,
            "playerPosition": 2,
            "level": 14,
            "doubleKills": 2,
            "neutralMinionsKilledYourJungle": 2,
            "totalDamageDealtToBuildings": 1000,
            "magicDamageDealtToChampions": 18068,
            "turretsKilled": 1,
            "magicDamageDealtPlayer": 82298,
            "assists": 9,
            "magicDamageTaken": 8663,
            "numDeaths": 9,
            "totalTimeCrowdControlDealt": 133,
            "largestMultiKill": 2,
            "physicalDamageTaken": 10896,
            "team": 100,
            "win": false,
            "totalDamageDealt": 91232,
            "largestKillingSpree": 5,
            "totalHeal": 1502,
            "item4": 1058,
            "item3": 3117,
            "item6": 3340,
            "item5": 1052,
            "minionsKilled": 96,
            "timePlayed": 1690,
            "physicalDamageDealtToChampions": 1250,
            "championsKilled": 9,
            "trueDamageTaken": 525,
            "goldSpent": 10635,
            "neutralMinionsKilled": 2
         },
         "gameId": 2888364921,
         "ipEarned": 55,
         "spell1": 4,
         "teamId": 100,
         "spell2": 12,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476631715108,
         "championId": 136
      },
      {
         "fellowPlayers": [
            {
               "championId": 268,
               "teamId": 200,
               "summonerId": 69086931
            },
            {
               "championId": 80,
               "teamId": 100,
               "summonerId": 67166859
            },
            {
               "championId": 245,
               "teamId": 200,
               "summonerId": 53297595
            },
            {
               "championId": 202,
               "teamId": 200,
               "summonerId": 72052027
            },
            {
               "championId": 25,
               "teamId": 200,
               "summonerId": 79301436
            },
            {
               "championId": 99,
               "teamId": 100,
               "summonerId": 67317358
            },
            {
               "championId": 222,
               "teamId": 100,
               "summonerId": 31610218
            },
            {
               "championId": 102,
               "teamId": 100,
               "summonerId": 65287113
            },
            {
               "championId": 86,
               "teamId": 200,
               "summonerId": 75267665
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 61789,
            "item2": 3116,
            "goldEarned": 20318,
            "item1": 3158,
            "wardPlaced": 20,
            "item0": 3027,
            "totalDamageTaken": 46226,
            "trueDamageDealtPlayer": 3910,
            "physicalDamageDealtPlayer": 14405,
            "trueDamageDealtToChampions": 1770,
            "killingSprees": 4,
            "playerRole": 4,
            "totalUnitsHealed": 1,
            "playerPosition": 2,
            "largestCriticalStrike": 126,
            "level": 18,
            "doubleKills": 2,
            "tripleKills": 2,
            "neutralMinionsKilledYourJungle": 10,
            "totalDamageDealtToBuildings": 1010,
            "magicDamageDealtToChampions": 59147,
            "turretsKilled": 1,
            "magicDamageDealtPlayer": 183069,
            "neutralMinionsKilledEnemyJungle": 2,
            "assists": 15,
            "magicDamageTaken": 22644,
            "numDeaths": 14,
            "totalTimeCrowdControlDealt": 2063,
            "largestMultiKill": 4,
            "physicalDamageTaken": 21453,
            "team": 100,
            "win": false,
            "totalDamageDealt": 201384,
            "totalHeal": 9131,
            "largestKillingSpree": 9,
            "item4": 3165,
            "item3": 3089,
            "item6": 3340,
            "item5": 3285,
            "minionsKilled": 132,
            "timePlayed": 2992,
            "wardKilled": 2,
            "physicalDamageDealtToChampions": 872,
            "championsKilled": 22,
            "trueDamageTaken": 2129,
            "quadraKills": 1,
            "goldSpent": 18700,
            "neutralMinionsKilled": 12
         },
         "gameId": 2886964113,
         "ipEarned": 85,
         "spell1": 4,
         "teamId": 100,
         "spell2": 12,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476556016917,
         "championId": 1
      },
      {
         "fellowPlayers": [
            {
               "championId": 222,
               "teamId": 100,
               "summonerId": 75601716
            },
            {
               "championId": 11,
               "teamId": 100,
               "summonerId": 65739568
            },
            {
               "championId": 157,
               "teamId": 100,
               "summonerId": 82651085
            },
            {
               "championId": 90,
               "teamId": 200,
               "summonerId": 45577615
            },
            {
               "championId": 24,
               "teamId": 200,
               "summonerId": 70728454
            },
            {
               "championId": 20,
               "teamId": 200,
               "summonerId": 88266966
            },
            {
               "championId": 412,
               "teamId": 200,
               "summonerId": 61137481
            },
            {
               "championId": 238,
               "teamId": 100,
               "summonerId": 52684683
            },
            {
               "championId": 236,
               "teamId": 200,
               "summonerId": 32091586
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 44693,
            "item2": 3117,
            "goldEarned": 15599,
            "item1": 3151,
            "wardPlaced": 30,
            "totalDamageTaken": 37264,
            "item0": 2301,
            "physicalDamageDealtPlayer": 10483,
            "killingSprees": 1,
            "playerRole": 2,
            "totalUnitsHealed": 1,
            "playerPosition": 4,
            "level": 16,
            "neutralMinionsKilledYourJungle": 3,
            "totalDamageDealtToBuildings": 1286,
            "magicDamageDealtToChampions": 42969,
            "turretsKilled": 1,
            "magicDamageDealtPlayer": 115017,
            "neutralMinionsKilledEnemyJungle": 1,
            "assists": 19,
            "magicDamageTaken": 12466,
            "numDeaths": 9,
            "totalTimeCrowdControlDealt": 1366,
            "largestMultiKill": 1,
            "physicalDamageTaken": 24109,
            "team": 100,
            "win": false,
            "totalDamageDealt": 125501,
            "largestKillingSpree": 2,
            "totalHeal": 2811,
            "item4": 3116,
            "item3": 3027,
            "item6": 3340,
            "item5": 3108,
            "minionsKilled": 77,
            "timePlayed": 2645,
            "wardKilled": 1,
            "physicalDamageDealtToChampions": 1724,
            "championsKilled": 5,
            "trueDamageTaken": 688,
            "goldSpent": 13350,
            "neutralMinionsKilled": 4
         },
         "gameId": 2886847225,
         "ipEarned": 78,
         "spell1": 4,
         "teamId": 100,
         "spell2": 3,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476551011056,
         "championId": 25
      },
      {
         "fellowPlayers": [
            {
               "championId": 268,
               "teamId": 200,
               "summonerId": 70730831
            },
            {
               "championId": 51,
               "teamId": 200,
               "summonerId": 42112430
            },
            {
               "championId": 113,
               "teamId": 200,
               "summonerId": 23091561
            },
            {
               "championId": 126,
               "teamId": 100,
               "summonerId": 77660257
            },
            {
               "championId": 39,
               "teamId": 200,
               "summonerId": 89148342
            },
            {
               "championId": 14,
               "teamId": 100,
               "summonerId": 38338664
            },
            {
               "championId": 23,
               "teamId": 100,
               "summonerId": 31722587
            },
            {
               "championId": 21,
               "teamId": 100,
               "summonerId": 49817180
            },
            {
               "championId": 35,
               "teamId": 100,
               "summonerId": 83160015
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 12269,
            "goldEarned": 9215,
            "item2": 3117,
            "item1": 3157,
            "wardPlaced": 19,
            "totalDamageTaken": 22810,
            "item0": 2301,
            "physicalDamageDealtPlayer": 8685,
            "visionWardsBought": 2,
            "playerRole": 2,
            "totalUnitsHealed": 1,
            "playerPosition": 4,
            "level": 14,
            "magicDamageDealtToChampions": 11174,
            "magicDamageDealtPlayer": 41149,
            "assists": 6,
            "magicDamageTaken": 4692,
            "numDeaths": 10,
            "totalTimeCrowdControlDealt": 181,
            "largestMultiKill": 1,
            "physicalDamageTaken": 17947,
            "win": false,
            "team": 200,
            "totalDamageDealt": 49835,
            "totalHeal": 947,
            "item4": 1052,
            "item3": 1011,
            "item6": 3340,
            "item5": 2043,
            "minionsKilled": 38,
            "timePlayed": 1906,
            "wardKilled": 1,
            "physicalDamageDealtToChampions": 1095,
            "championsKilled": 3,
            "trueDamageTaken": 170,
            "goldSpent": 8535
         },
         "gameId": 2885241750,
         "ipEarned": 60,
         "spell1": 4,
         "teamId": 200,
         "spell2": 3,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476464345642,
         "championId": 25
      },
      {
         "fellowPlayers": [
            {
               "championId": 78,
               "teamId": 100,
               "summonerId": 56570032
            },
            {
               "championId": 238,
               "teamId": 100,
               "summonerId": 52458609
            },
            {
               "championId": 157,
               "teamId": 200,
               "summonerId": 51648120
            },
            {
               "championId": 107,
               "teamId": 200,
               "summonerId": 45450790
            },
            {
               "championId": 134,
               "teamId": 200,
               "summonerId": 85880776
            },
            {
               "championId": 21,
               "teamId": 100,
               "summonerId": 71147218
            },
            {
               "championId": 84,
               "teamId": 100,
               "summonerId": 32270720
            },
            {
               "championId": 44,
               "teamId": 200,
               "summonerId": 19352794
            },
            {
               "championId": 22,
               "teamId": 200,
               "summonerId": 58678097
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 9412,
            "item2": 1011,
            "goldEarned": 10858,
            "item1": 3060,
            "wardPlaced": 21,
            "totalDamageTaken": 13737,
            "item0": 2301,
            "trueDamageDealtPlayer": 222,
            "physicalDamageDealtPlayer": 9646,
            "killingSprees": 1,
            "playerRole": 2,
            "totalUnitsHealed": 1,
            "playerPosition": 4,
            "level": 15,
            "neutralMinionsKilledYourJungle": 3,
            "totalDamageDealtToBuildings": 1057,
            "magicDamageDealtToChampions": 7658,
            "turretsKilled": 1,
            "magicDamageDealtPlayer": 47333,
            "neutralMinionsKilledEnemyJungle": 1,
            "assists": 18,
            "magicDamageTaken": 3912,
            "numDeaths": 3,
            "totalTimeCrowdControlDealt": 144,
            "largestMultiKill": 1,
            "physicalDamageTaken": 9758,
            "team": 100,
            "win": true,
            "totalDamageDealt": 57202,
            "largestKillingSpree": 3,
            "totalHeal": 68,
            "item4": 1052,
            "item3": 3117,
            "item6": 3340,
            "item5": 1058,
            "minionsKilled": 49,
            "timePlayed": 1756,
            "physicalDamageDealtToChampions": 1753,
            "championsKilled": 3,
            "trueDamageTaken": 66,
            "goldSpent": 8985,
            "neutralMinionsKilled": 4
         },
         "gameId": 2885174136,
         "ipEarned": 85,
         "spell1": 4,
         "teamId": 100,
         "spell2": 3,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476461958904,
         "championId": 25
      },
      {
         "fellowPlayers": [
            {
               "championId": 150,
               "teamId": 200,
               "summonerId": 46476958
            },
            {
               "championId": 1,
               "teamId": 100,
               "summonerId": 73577150
            },
            {
               "championId": 64,
               "teamId": 200,
               "summonerId": 60843195
            },
            {
               "championId": 78,
               "teamId": 200,
               "summonerId": 212101
            },
            {
               "championId": 22,
               "teamId": 200,
               "summonerId": 91587022
            },
            {
               "championId": 114,
               "teamId": 100,
               "summonerId": 20762576
            },
            {
               "championId": 245,
               "teamId": 200,
               "summonerId": 66040562
            },
            {
               "championId": 5,
               "teamId": 100,
               "summonerId": 19444051
            },
            {
               "championId": 67,
               "teamId": 100,
               "summonerId": 39542193
            }
         ],
         "gameType": "MATCHED_GAME",
         "stats": {
            "totalDamageDealtToChampions": 15390,
            "goldEarned": 12773,
            "item2": 3116,
            "item1": 3285,
            "wardPlaced": 25,
            "totalDamageTaken": 28806,
            "item0": 2301,
            "physicalDamageDealtPlayer": 8624,
            "playerRole": 2,
            "totalUnitsHealed": 1,
            "playerPosition": 4,
            "level": 17,
            "totalDamageDealtToBuildings": 5751,
            "magicDamageDealtToChampions": 14362,
            "turretsKilled": 1,
            "magicDamageDealtPlayer": 47771,
            "assists": 24,
            "magicDamageTaken": 7654,
            "numDeaths": 9,
            "totalTimeCrowdControlDealt": 618,
            "largestMultiKill": 1,
            "physicalDamageTaken": 20603,
            "win": true,
            "team": 100,
            "totalDamageDealt": 56396,
            "totalHeal": 1217,
            "item4": 3801,
            "item3": 3117,
            "item6": 3340,
            "item5": 1052,
            "minionsKilled": 26,
            "timePlayed": 2378,
            "wardKilled": 1,
            "physicalDamageDealtToChampions": 1028,
            "championsKilled": 1,
            "trueDamageTaken": 548,
            "goldSpent": 10785
         },
         "gameId": 2885104848,
         "ipEarned": 108,
         "spell1": 4,
         "teamId": 100,
         "spell2": 3,
         "gameMode": "CLASSIC",
         "mapId": 11,
         "level": 30,
         "invalid": false,
         "subType": "RANKED_SOLO_5x5",
         "createDate": 1476459722191,
         "championId": 25
      }
   ];
}
