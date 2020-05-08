import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../_core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean;

  constructor(public authService: AuthenticationService) {}

  ngOnInit(): void {}

  async signIn(email: string, password: string) {
    this.loading = true;

    await this.authService.SignIn(email, password);

    this.loading = false;
  }
}
