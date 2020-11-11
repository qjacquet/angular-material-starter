import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormService } from 'src/app/core/services/form.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    RouterModule.forChild(routes),

    SharedModule
  ],
  providers: [
    FormService
  ]
})
export class AuthenticationModule { }
