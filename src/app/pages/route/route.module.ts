import { NgModule       } from '@angular/core';
import { CommonModule   } from '@angular/common';
import { RouterModule   } from '@angular/router';
import { RouteComponent } from './route.component';
import { SightsListModule } from '../../modules/sights-list/sights-list.module';

@NgModule({
    imports: [
        CommonModule,
        SightsListModule,
        RouterModule.forRoot([
            {
                path: 'route',
                component: RouteComponent
            }
        ])
    ],
    declarations: [
        RouteComponent
    ]
})
export class RouteModule { }
