import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flag } from '../../../models/flag';

@Component({
    selector: 'app-sights-item',
    templateUrl: './sights-item.component.html',
    styleUrls: ['./sights-item.component.scss']
})

export class SightsItemComponent {
    @Input() sight: Flag;
    @Output() showModal = new EventEmitter();
    @Output() setFlag = new EventEmitter();
    @Output() addToRoute = new EventEmitter();
    @Output() removeFromRoute = new EventEmitter();

    constructor() { }

    onCardClick(event) {
        if ([].includes.call(event.target.classList, 'btn')) {
            this.sight.isAddedToRoute ? this.onRemoveFromRoute() : this.onAddToRoute()
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

    onAddToRoute() {
        this.sight.isAddedToRoute = true;
        this.addToRoute.emit(this.sight);
    }

    onRemoveFromRoute() {
        this.sight.isAddedToRoute = false;
        this.removeFromRoute.emit(this.sight);
    }
}
