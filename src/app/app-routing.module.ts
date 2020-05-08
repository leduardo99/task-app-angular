import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_core/guards/auth.guard';
import { SecureInnerPagesGuard } from './_core/guards/secure-inner-pages.guard';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    canActivate: [SecureInnerPagesGuard],
    loadChildren: () =>
      import('./pages/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
