import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [AuthRoutingModule, LoginModule, RegisterModule],
})
export class AuthModule {}
