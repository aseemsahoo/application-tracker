import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AuthGuard } from './config/keycloak.guard';
import { HomeModalComponent } from './components/home-modal/home-modal.component';
import { JobModalComponent } from './components/job-modal/job-modal.component';

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
    children: [
      { path: 'add', component: HomeModalComponent },
      { path: 'edit', component: JobModalComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
