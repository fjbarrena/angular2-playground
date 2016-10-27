import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { HttpModule, JsonpModule} from '@angular/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { RestHttp } from './servicios/rest.http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { StatsComponent } from './stats/stats.component';
import { ChampionDetailComponent } from './dashboard/champdetail.component';
import { AppComponent } from './app.component';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import { SkinsComponent } from './skins/skins.component';
import { NewSkinComponent } from './skins/new-skin.component';    
import { MarvelComponent } from './marvel/marvel.component';



@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    TimestampToDatePipe,
    AppComponent, 
    DashboardComponent,
    GamesComponent,
    StatsComponent,
    ChampionDetailComponent,
    SkinsComponent,
    NewSkinComponent,
    MarvelComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [RestHttp]
})
export class AppModule { }