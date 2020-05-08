import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbCardModule,
  NbListModule,
  NbButtonModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
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
export class RegisterModule {}
