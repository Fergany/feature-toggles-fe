import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesListComponent } from './features/features-list/features-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CommonModule } from '@angular/common';
import { CustomerFeaturesListComponent } from './customers/customer-features-list/customer-features-list.component';
import { AddCustomerFeaturesComponent } from './customers/add-customer-features/add-customer-features.component';
import { AddFeatureComponent } from './features/add-feature/add-feature.component';
import { EditFeatureComponent } from './features/edit-feature/edit-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    FeaturesListComponent,
    CustomerFeaturesListComponent,
    AddCustomerFeaturesComponent,
    AddFeatureComponent,
    EditFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
