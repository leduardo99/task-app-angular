import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../_core/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading: boolean;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  async signUp(email: string, password: string) {
    this.loading = true;

    await this.authService.SignUp(email, password);

    this.loading = false;
  }
}
