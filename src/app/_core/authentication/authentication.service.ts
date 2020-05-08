import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: User;
  authState: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.authState = this.afAuth.authState;

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async SignIn(email: string, password: string) {
    try {
      const { user } = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );

      await this.SetUserData(user);

      this.router.navigate(['todo']);
    } catch (error) {
      window.alert(error.message);
    }
  }

  public async SignUp(email: string, password: string) {
    try {
      const { user } = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await this.SetUserData(user);

      this.router.navigate(['todo']);
    } catch (error) {
      window.alert(error.message);
    }
  }

  async SendVerificationMail() {
    await this.afAuth.auth.currentUser.sendEmailVerification();

    this.router.navigate(['verify-email-address']);
  }

  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);

      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error.message);
    }
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  async AuthLogin(provider) {
    try {
      const { user } = await this.afAuth.auth.signInWithPopup(provider);

      this.router.navigate(['todo']);

      this.SetUserData(user);
    } catch (error) {
      window.alert(error);
    }
  }

  async SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    return await userRef.set(userData, {
      merge: true,
    });
  }

  async SignOut() {
    await this.afAuth.auth.signOut();

    localStorage.removeItem('user');

    this.router.navigate(['auth/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));

    return user !== null;
  }
}
