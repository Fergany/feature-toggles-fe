import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeaturesListComponent } from './features/features-list/features-list.component';
import { AddFeatureComponent } from './features/add-feature/add-feature.component';
import { CustomerFeaturesListComponent } from './customers/customer-features-list/customer-features-list.component';


const routes: Routes = [
  {
    path: '', component: AppComponent
    , children: [
      {
        path: 'features', component: FeaturesListComponent, 
        children: [
          { path: 'add', component: AddFeatureComponent }
        ]
      },
      {
        path: 'customer', 
        children: [
          { path: ':id/features', component: CustomerFeaturesListComponent }
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
