import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatTableModule, 
    MatPaginatorModule, 
    CdkTableModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }