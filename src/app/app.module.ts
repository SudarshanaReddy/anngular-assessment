import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealEstateTransactionProcessingComponent } from './real-estate-transaction-processing/real-estate-transaction-processing.component';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateTransactionProcessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
