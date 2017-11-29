import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Flag } from '../models/flag';

@Injectable()
export class ModalService {
  private modalSubject: Subject<Flag> = new Subject();
  constructor() { }
  modalUpdater() {
    return this.modalSubject.asObservable();
  }
  showModal(sight: Flag) {
    this.modalSubject.next(sight);
  }
}
