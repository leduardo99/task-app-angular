import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbCardModule,
  NbListModule,
  NbButtonModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbSpinnerModule,
  ],
})
export class LoginModule {}
