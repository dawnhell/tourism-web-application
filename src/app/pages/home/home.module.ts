import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SightsListModule } from '../../modules/sights-list/sights-list.module';

@NgModule({
  imports: [
      CommonModule,
      SightsListModule,
      RouterModule.forRoot([
          {
              path: 'home',
              component: HomeComponent
          }
      ])
  ],
  declarations: [
      HomeComponent,
  ],
})
export class HomeModule { }
