import { Component, NgZone, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { Flag } from '../../models/flag';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  list: Flag[] = [];
  page: number = 1;
  isEndOfList: boolean;
  constructor(private _mapService: MapService,
              private zone: NgZone) { }

  ngOnInit() {
    this.list = this._mapService.getFavorites();
    this._mapService.favouritesUpdater().subscribe(sight => {
        this.zone.run(() => {
            const index = this.list.findIndex(el => el.id === sight.id);
            if (index > -1) {
                this.list[index] = sight;
            } else {
                this.list.push(sight);
            }
        })
    })
  }
  getFavorites() {
    if (!this.isEndOfList) {
        const newFaves = this._mapService.getFavorites(this.page);
        if (newFaves.length) {
            this.list.concat(newFaves)
        } else {
            this.isEndOfList = true;
        }
    }
  }

}
