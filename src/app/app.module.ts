import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'application-realm',
        clientId: 'application-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe : true,
        checkLoginIframeInterval : 25,
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      loadUserProfileAtStartUp : true
    });
}

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
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpClientModule, KeycloakAngularModule],
  providers:
   [
    KeycloakService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
