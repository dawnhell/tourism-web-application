import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SightsListComponent } from './sights-list.component';
import { SightsItemComponent } from './sights-item/sights-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        InfiniteScrollModule,
    ],
    declarations: [
        SightsListComponent,
        SightsItemComponent
    ],
    exports: [
        SightsListComponent
    ]
})
export class SightsListModule { }
