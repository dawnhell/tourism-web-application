import { BrowserModule          } from '@angular/platform-browser';
import { NgModule               } from '@angular/core';
import { RouterModule           } from '@angular/router';

import { AppComponent           } from './app.component';
import { HomePageComponent      } from './home-page/home-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { MapComponent           } from './home-page/map/map.component';
import { PreviewStripComponent  } from './home-page/preview-strip/preview-strip.component';
import { PlaceComponent         } from './home-page/preview-strip/place/place.component';
import { PageNotFoundComponent  } from './page-not-found/page-not-found.component';
import { AppRoutingModule       } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritesPageComponent,
    MapComponent,
    PreviewStripComponent,
    PlaceComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
