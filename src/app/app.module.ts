import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { TableComponent } from './table/table.component';
import {PatientService} from './share/service/patient/patient.service';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import { PatientComponent } from './patient/patient.component';
import { QuestionComponent } from './question/question.component';
import {KeycloakService} from './share/service/keycloak/keycloak.service';
import { TableSecureComponent } from './table-secure/table-secure.component';
import {PatientSecureService} from './share/service/patient-secure/patient-secure.service';
import {AuthConfig, AuthHttp, provideAuth} from 'angular2-jwt';
import { PatientSecureComponent } from './patient-secure/patient-secure.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    noJwtError: true,
    tokenGetter: (() => {
      return window['_keycloak'].token;
    }),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

const appRoutes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'table-secure', component: TableSecureComponent },
  { path: 'table-secure/:patientId', component: PatientSecureComponent },
  { path: 'table', component: TableComponent },
  { path: 'table/:patientId', component: PatientComponent },
  { path: '',
    redirectTo: '/question',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PatientComponent,
    QuestionComponent,
    TableSecureComponent,
    PatientSecureComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PatientService,
    KeycloakService,
    PatientSecureService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
