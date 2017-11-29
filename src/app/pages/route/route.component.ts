import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flag } from '../../models/flag';
import { MapService } from '../../services/map.service';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})

export class RouteComponent implements OnInit {
    flags: Flag[] = [];
    @Output() showModal = new EventEmitter();

    constructor(private _mapService: MapService,
                private _modalService: ModalService) { }

    ngOnInit() {
        this.flags = this._mapService.getRoute();

        this._mapService.addSight().subscribe(sight => {
            const sightIdx = this.flags.findIndex(item => item.id === sight.id);
            if (sightIdx < 0) {
                this.flags.push(sight);
            }
        });
    }

    onShowModal(flag: Flag) {
        this._modalService.showModal(flag);
    }

    setFlag(flag: Flag) {
        this._mapService.setSight(flag);
    }
}
