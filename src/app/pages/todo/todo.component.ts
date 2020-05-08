import { Component, OnInit, DoCheck } from '@angular/core';

import { AuthenticationService } from '../../_core/authentication/authentication.service';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  description: String;
  todos: Todo[];

  constructor(
    public authService: AuthenticationService,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.todoService.getTodos().subscribe((s) => {
          this.todos = s.map(({ payload }) => ({
            id: payload.doc.id,
            description: payload.doc.data()['description'],
            done: payload.doc.data()['done'],
          }));
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.description) return;

    let description = this.description;

    let todo: Todo = {
      description,
      done: false,
    };

    this.todoService.addTodo(todo);

    this.description = '';
  }

  handleRemoveTodo(id: string) {
    this.todoService.deleteTodo(id);
  }

  handleToggleTodo(id: string) {
    this.todoService.updateTodo(id, { done: true });
  }

  logout() {
    this.authService.SignOut();
  }
}
