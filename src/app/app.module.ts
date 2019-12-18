import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClient } from 'selenium-webdriver/http';
import { AppConfig } from './app.config';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MasterModule } from './layout/master/master.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    Routing,MasterModule, BrowserAnimationsModule
  ],
  providers: [AppConfig, {
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
