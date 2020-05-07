import { Component, OnInit } from '@angular/core';

interface Todos {
  id: Number;
  description: String;
  done: Boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  description: String;
  todos: Todos[];

  ngOnInit() {
    this.todos = [];

    this.description = '';
  }

  handleSubmit() {
    if (!this.description) return;

    let description = this.description;

    this.todos = [
      ...this.todos,
      {
        id: Math.round(Math.random() * 10),
        description,
        done: false,
      },
    ];

    this.description = '';
  }

  handleRemoveTodo(id: Number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  handleToggleTodo(id: Number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }
}
