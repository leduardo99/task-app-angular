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
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbEvaIconsModule,
  ],
})
export class TodoModule {}
