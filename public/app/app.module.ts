// Core Angular 2 modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';

// Third party modules
import { MaterialModule } from '@angular/material';
import 'hammerjs'; // Couple components in Angular material have dependency on hammerjs

// Main app components and services
import { AppComponent } from './app.component';
import { DataService } from './data/data.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
