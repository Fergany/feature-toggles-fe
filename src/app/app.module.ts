import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesListComponent } from './features/features-list/features-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CommonModule } from '@angular/common';
import { CustomerFeaturesListComponent } from './customers/customer-features-list/customer-features-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    FeaturesListComponent,
    CustomerFeaturesListComponent
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
