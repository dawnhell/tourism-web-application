import { Component  } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  isAuthenticated: boolean = false;

  constructor(private _mapService: MapService) { }

  onLogin(): void {
    this.isAuthenticated = true;
  }

  onLogout(): void {
    this.isAuthenticated = false;
  }

  onCityChange(city): void {
    switch (city) {
      case 'brest':
        this._mapService.sendCoordinates(52.09, 23.73);
        break;

      case 'minsk':
        this._mapService.sendCoordinates(53.9, 27.6);
        break;

      case 'grodno':
        this._mapService.sendCoordinates(53.66, 23.82);
        break;

      case 'mogilev':
        this._mapService.sendCoordinates(53.89, 30.33);
        break;

      case 'vitebsk':
        this._mapService.sendCoordinates(55.18, 30.2);
        break;

      case 'gomel':
        this._mapService.sendCoordinates(52.43, 30.99);
        break;
    }
  }
}
