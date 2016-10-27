import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent }  from '../dashboard/dashboard.component';
import { ChampionDetailComponent } from '../dashboard/champdetail.component';
import { GamesComponent } from '../games/games.component';
import { StatsComponent } from '../stats/stats.component';
import { NewSkinComponent } from '../skins/new-skin.component';
import { MarvelComponent } from '../marvel/marvel.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'games', component: GamesComponent },
      { path: 'dashboard/:id', component: ChampionDetailComponent },
      { path: 'newSkin', component: NewSkinComponent },
      { path: 'marvel', component: MarvelComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
