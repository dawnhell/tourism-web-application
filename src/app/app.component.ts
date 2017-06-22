import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated: boolean = false;

  onLogin(): void {
      this.isAuthenticated = true;
  }

  onLogout(): void {
      this.isAuthenticated = false;
  }
}
