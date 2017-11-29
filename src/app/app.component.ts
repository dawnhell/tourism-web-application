import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { Flag } from './models/flag';
import { MapService } from './services/map.service';

declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    modalSight: Flag;
    constructor (private _modalService: ModalService,
                 private _mapService: MapService) { }
    ngOnInit() {
        this._modalService.modalUpdater().subscribe(sight => {
            this.modalSight = sight;
            $('#sightModal').modal()
        })
    }

    onSetFlag() {
        if (this.modalSight.isFavourite) {
            --this.modalSight.popularity;
            this.modalSight.favedAt = null;
            this.modalSight.isFavourite = false;
        } else {
            ++this.modalSight.popularity;
            this.modalSight.favedAt = new Date();
            this.modalSight.isFavourite = true;
        }

        this._mapService.setSight(this.modalSight);
    }
}
