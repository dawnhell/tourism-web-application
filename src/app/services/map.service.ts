import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject    } from 'rxjs/Subject';

import { FLAGS      } from './mock-data';
import { Flag } from '../models/flag';

const LIMIT = 10;

@Injectable()
export class MapService {
    private coordinates = new Subject<any>();
    private all = new Subject<Flag[]>();
    private init = new Subject<Flag[]>();
    private update = new Subject<Flag[]>();
    private favourite = new Subject<Flag>();
    private southWest;
    private northEast;

    sendDefaultCoordinates() {
        this.coordinates.next({ lat: 53.9, lon: 27.6 });
    }

    sendCoordinates(lat, lon) {
        this.coordinates.next({ lat: lat, lon: lon });
    }

    setBounds(southWest, northEast) {
        this.southWest = southWest;
        this.northEast = northEast;
        this.init.next(this.getSights());
        this.all.next(FLAGS.filter((flag) => (flag.latitude > this.southWest.lat && flag.latitude < this.northEast.lat) &&
            (flag.longitude > this.southWest.lng && flag.longitude < this.northEast.lng)
        ));
    }

    getSights(page: number = 0) {
        return FLAGS.filter((flag) => (flag.latitude > this.southWest.lat && flag.latitude < this.northEast.lat) &&
            (flag.longitude > this.southWest.lng && flag.longitude < this.northEast.lng)
        ).slice(page * LIMIT, (page + 1) * LIMIT)
    }

    getFavorites(page: number = 0) {
        return FLAGS.filter(flag => flag.isFavourite).slice(page * LIMIT, (page + 1) * LIMIT)
    }

    setSight(flag: Flag) {
        FLAGS[FLAGS.findIndex(el => el.id === flag.id)] = flag;
        this.favourite.next(flag);
    }

    loadMoreSights(page: number) {
        this.update.next(this.getSights(page));
    }

    getCityCoordinates(): Observable<any> {
        return this.coordinates.asObservable();
    }

    getAllSigts() {
        return this.all.asObservable();
    }

    sightsInit() {
        /* Imitating getting sights from server. */
        return this.init.asObservable();
    }

    sightsUpdater() {
        return this.update.asObservable();
    }

    favouritesUpdater() {
        return this.favourite.asObservable();
    }

    selectSight(sight: Flag) {
        this.init.next([sight]);
    }
}
