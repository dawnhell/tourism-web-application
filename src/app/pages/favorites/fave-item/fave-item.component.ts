import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flag } from '../../../models/flag';

@Component({
    selector: 'app-fave-item',
    templateUrl: './fave-item.component.html',
    styleUrls: ['./fave-item.component.scss']
})
export class FaveItemComponent {
    @Input() sight: Flag;
    @Output() showModal = new EventEmitter();
    @Output() setFlag = new EventEmitter();

    constructor() { }

    onCardClick(event) {
        if ([].includes.call(event.target.classList, 'btn')) {
            // add to route
        } else if ([].includes.call(event.target.classList, 'fa-heart')) {
            this.onSetFlag();
        } else {
            this.showModal.emit(this.sight);
        }
    }

    onSetFlag() {
        if (this.sight.isFavourite) {
            --this.sight.popularity;
            this.sight.favedAt = null;
            this.sight.isFavourite = false;
        } else {
            ++this.sight.popularity;
            this.sight.favedAt = new Date();
            this.sight.isFavourite = true;
        }

        this.setFlag.emit(this.sight);
    }
}
