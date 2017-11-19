import { Component, OnInit } from '@angular/core';
import { Flag } from './models/flag';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    flags: Flag[] = [];
    currentPage: number = 1;
    isEndOfList: boolean;
    constructor(private _mapService: MapService) { }

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
                    console.log('update');
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
}
