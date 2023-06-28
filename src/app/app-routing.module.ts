import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateTransactionProcessingComponent } from './components/real-estate-transaction-processing/real-estate-transaction-processing.component';

const routes: Routes = [ {
  path : '',
  component: RealEstateTransactionProcessingComponent
} ];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
