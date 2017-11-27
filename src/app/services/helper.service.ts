import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Flag} from '../models/flag';

@Injectable()
export class HelperService {
    private isAddBtnVisible = new Subject<boolean>();
    private selectedEvent = new Subject<Flag>();
    private route = new Subject<Flag[]>();

    isAbbBtnVisible$ = this.isAddBtnVisible.asObservable();
    selectedEvent$ = this.selectedEvent.asObservable();
    route$ = this.route.asObservable();

    public toggleAbbBtn(flag: boolean) {
        this.isAddBtnVisible.next(flag);
    }

    public selectEvent(flag: Flag) {
        this.selectedEvent.next(flag);
    }

    public addEventToRoute(flag: Flag) {
        // this.route.next(this.route.push(flag));
    }
}
