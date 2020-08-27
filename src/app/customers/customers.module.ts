import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFeaturesListComponent } from './customer-features-list/customer-features-list.component';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [CustomerFeaturesListComponent, CustomersListComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
