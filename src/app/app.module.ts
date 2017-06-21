import { BrowserModule          } from '@angular/platform-browser';
import { NgModule               } from '@angular/core';

import { AppComponent           } from './app.component';
import { HomePageComponent      } from './home-page/home-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { MapComponent           } from './map/map.component';
import { PreviewStripComponent  } from './preview-strip/preview-strip.component';
import { PlaceComponent         } from './place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritesPageComponent,
    MapComponent,
    PreviewStripComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
