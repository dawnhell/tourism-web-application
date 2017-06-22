import { BrowserModule          } from '@angular/platform-browser';
import { NgModule               } from '@angular/core';
import { RouterModule           } from '@angular/router';

import { AppComponent           } from './app.component';
import { HomePageComponent      } from './home-page/home-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { MapComponent           } from './map/map.component';
import { PreviewStripComponent  } from './preview-strip/preview-strip.component';
import { PlaceComponent         } from './place/place.component';
import { PageNotFoundComponent  } from './page-not-found/page-not-found.component';
import { APP_ROUTES             } from './app.routes';

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
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
