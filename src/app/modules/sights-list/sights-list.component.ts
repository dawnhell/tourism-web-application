import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Flag } from '../../models/flag';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})

export class SightsListComponent {
  @Input() flags: Flag[];
  @Output() showModal = new EventEmitter();
  @Output() setFlag = new EventEmitter();
  @Output() scroll = new EventEmitter();

  constructor() { };

  onShowModal(sight: Flag) {
      this.showModal.emit(sight);
  }

  onScroll() {
    this.scroll.emit();
  }

  onSetFlag(flag: Flag) {
    this.setFlag.emit(flag);
  }
}
