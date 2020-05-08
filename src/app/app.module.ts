import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbLayoutModule, NbThemeModule, NbActionsModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TodoModule } from './pages/todo/todo.module';
import { AuthModule } from './pages/auth/auth.module';
import { CoreModule } from './_core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    CoreModule.forRoot(),
    TodoModule,
    AuthModule,
    NbActionsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
