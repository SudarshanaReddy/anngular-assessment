import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RealEstateTransactionProcessingComponent } from './components/real-estate-transaction-processing/real-estate-transaction-processing.component';
import { RealEstateTransactionProcessingService } from './services/real-estate-transaction-processing.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateTransactionProcessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RealEstateTransactionProcessingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
