import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
