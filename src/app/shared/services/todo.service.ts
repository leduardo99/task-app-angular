import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { AuthenticationService } from '../../_core/authentication/authentication.service';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  userId: string;

  constructor(
    private authService: AuthenticationService,
    private afs: AngularFirestore
  ) {}

  addTodo(todo: Todo) {
    const todoRef = this.afs.doc(`todos/${this.authService.userData.uid}`);

    return todoRef.collection('myTasks').add(todo);
  }

  getTodos() {
    return this.afs
      .doc(`todos/${this.authService.userData.uid}`)
      .collection('myTasks')
      .snapshotChanges();
  }

  updateTodo(id: string, todo: Todo) {
    this.afs
      .doc(`todos/${this.authService.userData.uid}`)
      .collection('myTasks')
      .doc(id)
      .update(todo);
  }

  deleteTodo(id: string) {
    this.afs
      .doc(`todos/${this.authService.userData.uid}`)
      .collection('myTasks')
      .doc(id)
      .delete();
  }
}
