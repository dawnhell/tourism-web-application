import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { RouterModule } from '@angular/router';
import { SightsListModule } from '../../modules/sights-list/sights-list.module';


@NgModule({
    imports: [
        CommonModule,
        SightsListModule,
        RouterModule.forRoot([
            {
                path: 'favorites',
                component: FavoritesComponent
            }
        ])
    ],
    declarations: [
        FavoritesComponent,
    ]
})
export class FavoritesModule { }
