import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flag } from '../../../models/flag';

@Component({
  selector: 'app-sights-item',
  templateUrl: './sights-item.component.html',
  styleUrls: ['./sights-item.component.scss']
})

export class SightsItemComponent {
  @Input() sight: Flag;
  @Output() navigate = new EventEmitter();
  @Output() setFlag = new EventEmitter();

  constructor() { }

  onNavigate() {
    this.navigate.emit(this.sight);
  }

  onSetFlag() {
    if (this.sight.isFavourite) {
        --this.sight.popularity;
        this.sight.isFavourite = false;
    } else {
        ++this.sight.popularity;
        this.sight.isFavourite = true;
    }

    this.setFlag.emit(this.sight);
  }

  onLikeClick() {

  }
}
