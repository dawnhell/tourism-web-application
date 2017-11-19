import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
            {
                path: 'favorites',
                component: FavoritesComponent
            }
        ])
    ],
    declarations: [
        FavoritesComponent
    ]
})
export class FavoritesModule { }
