import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './guards/auth.guard';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { TodoService } from '../shared/services/todo.service';

const firebaseConfig = {
  apiKey: 'AIzaSyA1doghdrKGQiYQnZz1oSqe4gLoFg65S2Y',
  authDomain: 'taskapp-31f3b.firebaseapp.com',
  databaseURL: 'https://taskapp-31f3b.firebaseio.com',
  projectId: 'taskapp-31f3b',
  storageBucket: 'taskapp-31f3b.appspot.com',
  messagingSenderId: '576718219494',
  appId: '1:576718219494:web:cba6984db2f99669c23327',
  measurementId: 'G-QXQR69DBC1',
};

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AngularFireModule,
        AngularFireAuth,
        AngularFirestore,
        AuthGuard,
        SecureInnerPagesGuard,
        AuthenticationService,
        TodoService,
      ],
    };
  }
}
