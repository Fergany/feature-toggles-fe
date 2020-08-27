import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFeaturesListComponent } from './customer-features-list/customer-features-list.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AddCustomerFeaturesComponent } from './add-customer-features/add-customer-features.component';


@NgModule({
  declarations: [CustomerFeaturesListComponent, CustomersListComponent, AddCustomerFeaturesComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
