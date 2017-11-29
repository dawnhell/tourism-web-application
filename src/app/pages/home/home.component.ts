import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flag } from '../../models/flag';
import { MapService } from '../../services/map.service';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    flags: Flag[] = [];
    currentPage: number = 1;
    isEndOfList: boolean;
    @Output() showModal = new EventEmitter();

    constructor(private _mapService: MapService,
                private _modalService: ModalService) { }

    ngOnInit() {
        this._mapService.sightsInit()
            .subscribe(
                data => {
                    this.flags = data;
                    this.currentPage = 1;
                    this.isEndOfList = false;
                },
                error => {
                    console.log(error);
                }
            );
        this._mapService.sightsUpdater()
            .subscribe(
                data => {
                    if (data.length) {
                        this.flags = this.flags.concat(data);
                    } else {
                        this.isEndOfList = true;
                    }
                },
                error => {
                    console.log(error);
                }
            );
    }

    onScroll() {
        if (!this.isEndOfList) {
            this._mapService.loadMoreSights(this.currentPage);
            this.currentPage++;
        }
    }

    onShowModal(flag: Flag) {
        this._modalService.showModal(flag);
    }

    setFlag(flag: Flag) {
        this._mapService.setSight(flag);
    }
}
