import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Champion }       from '../model/champion.model';
import { ChampionInfo }   from '../model/champion-info.model';
import { Skin } from '../model/skin.model'
import 'rxjs/Rx';

//http://www.lolking.net/images/v2/champions/icons/size100x100/81.png

@Injectable()
export class RestHttp {
  private backendUrl = 'http://localhost:8000';  // URL to web API
  
  constructor (private http: Http) {

  }

  addSkin(skin : Skin) : Observable<String[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    
    let body = {
      "id": skin.id,
      "championId": skin.championId,
      "skinUrl": skin.skinUrl,
      "skinName": skin.skinName 
    }
      
    
    return this.http.post(
      this.backendUrl + '/skins', body, headers)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getSkins(championId : String) : Observable<Skin[]> {
    return this.http.get(this.backendUrl + "/skins?championId=" + championId)
              .map(this.extractSkins)
              .catch(this.handleError);
  }

  getMyGames (): Observable<String[]> {
    return this.http.get(this.backendUrl + "/games")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getChamp(id : Number) : Observable<Champion> {
    return this.http.get(this.backendUrl + "/champions/" + id)
                    .map(this.extractChampion)
                    .catch(this.handleError);
  }

  getAllChamps() : Observable<Champion[]> {
    return this.http.get(this.backendUrl + "/champions")
                    .map(this.extractChampions)
                    .catch(this.handleError);
  }

  private extractChampion(res : Response) {
    return <Champion> JSON.parse(JSON.stringify(res.json()));
  }

  private extractSkins(res: Response) {
    let body = res.json();
    return <Skin[]> JSON.parse(JSON.stringify(body));
  }

  private extractChampions(res: Response) {
    let body = res.json();
    return <Champion[]> JSON.parse(JSON.stringify(body));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
