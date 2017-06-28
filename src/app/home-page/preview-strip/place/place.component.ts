import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
    @Input()
    name: string;
    @Input()
    city: string;
    @Input()
    description: string;
    @Input()
    photo_url: string;
    @Input()
    popularity: string;
    @Input()
    isFavourite: boolean;

    constructor() {
        console.log(this.name);
    }

    ngOnInit() { }

    // onFavourite(): void {
    //     if (!this.isfavourite) {
    //         this.favourites++;
    //         this.isfavourite = true;
    //     } else {
    //         this.favourites--;
    //         this.isfavourite = false;
    //     }
    // }

}
