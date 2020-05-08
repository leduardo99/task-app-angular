import { Component } from '@angular/core';

import { AuthenticationService } from './_core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(public authService: AuthenticationService) {}
}
