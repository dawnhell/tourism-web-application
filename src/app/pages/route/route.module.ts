import { NgModule       } from '@angular/core';
import { CommonModule   } from '@angular/common';
import { RouterModule   } from '@angular/router';
import { RouteComponent } from './route.component';

@NgModule({
    imports: [
        CommonModule,
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
