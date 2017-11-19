import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      CommonModule,
      LeafletModule,
      RouterModule.forRoot([
          {
              path: 'home',
              component: HomeComponent
          }
      ])
  ],
  declarations: [
      HomeComponent,
      MapComponent
  ],
})
export class HomeModule { }
