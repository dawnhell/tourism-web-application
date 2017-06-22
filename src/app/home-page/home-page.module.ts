import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {MapComponent} from './map/map.component';
import {PreviewStripComponent} from './preview-strip/preview-strip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      HomePageComponent,
      MapComponent,
      PreviewStripComponent
  ]
})
export class HomePageModule { }
