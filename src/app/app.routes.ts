import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AuthGuard } from './config/keycloak.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: FormComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'signup', component: SignupFormComponent },
    ],
  },
  {
    path: 'home', 
    component: HomeComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
