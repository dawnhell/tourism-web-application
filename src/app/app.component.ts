import { Component, OnInit } from '@angular/core';
import { Flag } from './models/flag';
import { MapService } from './services/map.service';
import {HelperService} from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    flags: Flag[] = [];
    currentPage: number = 1;
    isEndOfList: boolean;
    isAddBtnVisible: boolean = false;

    constructor(private _mapService: MapService,
                private _helperService: HelperService) {
        this._helperService.isAbbBtnVisible$.subscribe(
            data => {
                this.isAddBtnVisible = data;
            },
            error => {
                console.log(error);
            }
        );
    }

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

    setFlag(flag: Flag) {
        this._mapService.setSight(flag);
    }

    showAddBtn(flag: Flag) {
        console.log(flag);
    }

    addEventToRoute() {
        
    }
}
