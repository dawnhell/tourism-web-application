import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Flag } from '../../models/flag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})

export class SightsListComponent {
  @Input() flags: Flag[];
  @Output() setFlag = new EventEmitter();
  @Output() scroll = new EventEmitter();

  constructor(private router: Router) { };

  onNavigate(sight: Flag) {
      this.router.navigate(['sight', sight.id]);
  }

  onScroll() {
    this.scroll.emit();
  }

  onSetFlag(flag: Flag) {
    this.setFlag.emit(flag);
  }
}
