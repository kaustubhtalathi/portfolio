import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';

import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule }             from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';
import { LambdaService } from './providers/lambda.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent }   from './app.component';
import { BlankComponent }  from './components/blank/blank.component';
import { DemosComponent }  from './components/demos/demos.component';
import { HomeComponent }  from './components/home/home.component';
import { HeaderComponent }  from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';
import { ResumeComponent }  from './components/resume/resume.component';
import { CertificationsComponent }  from './components/certifications/certifications.component';
import { ProjectsComponent }  from './components/projects/projects.component';

// Angular Material Components
import {  MatButtonModule, MatCheckboxModule, 
          MatProgressSpinnerModule, MatMenuModule,
          MatCardModule, MatGridListModule, MatIconModule,
          MatDividerModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppConfig } from '../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    DemosComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    CertificationsComponent,
    ProjectsComponent,
    WebviewDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatMenuModule, 
    MatCardModule, MatGridListModule, MatIconModule, MatDividerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: AppConfig.production })
  ],
  providers: [ElectronService, LambdaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
