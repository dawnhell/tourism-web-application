import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {MapComponent} from './map/map.component';
import {PreviewStripComponent} from './preview-strip/preview-strip.component';
import {FormsModule} from '@angular/forms';
import {LeafletModule} from '@asymmetrik/angular2-leaflet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LeafletModule
  ],
  declarations: [
      HomePageComponent,
      MapComponent,
      PreviewStripComponent
  ]
})
export class HomePageModule { }
