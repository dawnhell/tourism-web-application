import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
            {
                path: 'sight/:id',
                component: MediaComponent
            }
        ])
    ],
    declarations: [MediaComponent]
})
export class MediaModule { }
