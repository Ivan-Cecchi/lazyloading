import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './component1/components/components.component';
import { Components1Component } from './components/components1/components1.component';
import { Components2Component } from './components/components2/components2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    Components1Component,
    Components2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
