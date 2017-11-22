import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { RouterModule } from '@angular/router';
import { FaveListComponent } from './fave-list/fave-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FaveItemComponent } from './fave-item/fave-item.component';


@NgModule({
    imports: [
        CommonModule,
        InfiniteScrollModule,
        RouterModule.forRoot([
            {
                path: 'favorites',
                component: FavoritesComponent
            }
        ])
    ],
    declarations: [
        FavoritesComponent,
        FaveListComponent,
        FaveItemComponent,
    ]
})
export class FavoritesModule { }
