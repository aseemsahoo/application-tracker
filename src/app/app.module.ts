import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutes } from './app.routes';
import { NavComponent } from './components/nav/nav.component';
import { RequestInterceptor } from './config/request.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginFormComponent,
    SignupFormComponent,
    FormButtonComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpClientModule],
  providers:
   [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
