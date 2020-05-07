import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TodoModule } from './pages/todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
