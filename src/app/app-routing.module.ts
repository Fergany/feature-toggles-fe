import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesListComponent } from './features/features-list/features-list.component';
import { AddFeatureComponent } from './features/add-feature/add-feature.component';
import { EditFeatureComponent } from './features/edit-feature/edit-feature.component';
import { CustomerFeaturesListComponent } from './customers/customer-features-list/customer-features-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { AddCustomerFeaturesComponent } from './customers/add-customer-features/add-customer-features.component';


const routes: Routes = [
  {
    path: ''
    , children: [
      {
        path: 'features',
        children: [
          { path: '', component: FeaturesListComponent },
          { path: 'add', component: AddFeatureComponent },
          { path: ':id', component: EditFeatureComponent }
        ]
      },
      {
        path: 'customers',
        children: [
          { path: '', component: CustomersListComponent },
          { path: ':id/features', component: CustomerFeaturesListComponent },
          { path: ':id/features/add', component: AddCustomerFeaturesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
