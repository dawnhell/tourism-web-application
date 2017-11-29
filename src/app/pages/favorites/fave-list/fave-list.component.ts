import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { Flag } from '../../../models/flag';
import { Router } from '@angular/router';
import { MapService } from '../../../services/map.service';
import { ModalService } from '../../../services/modal.service';

const MONTH_NAMES = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

@Component({
  selector: 'app-fave-list',
  templateUrl: './fave-list.component.html',
  styleUrls: ['./fave-list.component.scss']
})
export class FaveListComponent implements OnInit {
    @Input() flags: Flag[];
    @Output() setFlag = new EventEmitter();
    @Output() scroll = new EventEmitter();
    groups = [];
    monthNames = MONTH_NAMES;

    constructor(private _modalService: ModalService,
                private _mapService: MapService,
                private zone: NgZone) { };

    ngOnInit() {
        const dateMap = new Map();
        for (const flag of this.flags) {
            flag.favedAt.setHours(0, 0, 0, 0);
            const dateTime = flag.favedAt.getTime();
            let group = dateMap.get(dateTime);
            if (group) {
                group.push(flag)
            } else {
                group = [flag];
            }
            dateMap.set(dateTime, group);
        }
        this.groups = Array.from(dateMap);
        this.groups.forEach(group => {
            group[0] = new Date(group[0])
        });
        this._mapService.favouritesUpdater().subscribe(sight => {
            this.zone.run(() => {
                if (sight.favedAt) {
                    sight.favedAt.setHours(0, 0, 0, 0);
                    const groupIdx = this.groups.findIndex(item => item[0].getTime() === sight.favedAt.getTime());
                    if (groupIdx > -1) {
                        const sightIdx = this.groups[groupIdx][1].findIndex(flag => flag.id === sight.id);
                        if (sightIdx > -1) {
                            this.groups[groupIdx][1][sightIdx] = sight;
                        } else {
                            this.groups[groupIdx][1].push(sight);
                        }
                    } else {
                        this.groups.push([sight.favedAt, [sight]])
                    }
                }
            })
        })
    }

    onShowModal(sight: Flag) {
        this._modalService.showModal(sight);
    }

    onScroll() {
        this.scroll.emit();
    }

    onSetFlag(flag: Flag) {
        this.setFlag.emit(flag);
    }

    onAddToRoute(flag: Flag) {
        this._mapService.addToRoute(flag);
    }

    onRemoveFromRoute(flag: Flag) {
        this._mapService.removeFromRoute(flag);
    }
}
