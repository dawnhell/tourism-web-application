import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  id: number;
  name: string = "Gorky Park";
  photo: string = "https://roomer.by/sites/default/files/ecutai9r4lo.jpg";
  favourites: number = 156;
  isfavourite: boolean = false;
  country: string = "Belarus";
  region: string = "Minsk region";
  city: string = "Minsk";
  fullDescription: string;
  shortDescription: string = "A part of the park's territory is occupied by";

  constructor() { }

  ngOnInit() {
  }

  onFavourite(): void {
    if (!this.isfavourite) {
      this.favourites++;
      this.isfavourite = true;
    } else {
      this.favourites--;
      this.isfavourite = false;
    }
  }

}
