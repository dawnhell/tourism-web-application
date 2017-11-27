import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoritesModule } from './pages/favorites/favorites.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeModule } from './pages/home/home.module';
import { MediaModule } from './pages/media/media.module';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { MapService } from './services/map.service';
import { ApiModule } from './services/swagger/api.module';
import { SightsListModule } from './modules/sights-list/sights-list.module';
import { AppRouteReuseStrategy } from './app.route-reuse-strategy';
import { SightService } from './services/swagger/api/sight.service';
import {RouteModule} from './pages/route/route.module';
import {HelperService} from './services/helper.service';

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent
  ],
  imports: [
      BrowserModule,
      SightsListModule,
      FavoritesModule,
      HomeModule,
      MediaModule,
      ApiModule,
      RouteModule,
      RouterModule.forRoot([
          {
              path: '**',
              pathMatch: 'full',
              redirectTo: 'home'
          }
      ])
  ],
  providers: [
      MapService,
      HelperService,
      SightService,
      {
          provide: RouteReuseStrategy,
          useClass: AppRouteReuseStrategy
      }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
