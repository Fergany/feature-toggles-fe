import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesListComponent } from './features-list/features-list.component';
import { AddFeatureComponent } from './add-feature/add-feature.component';
import { AssignFeaturesComponent } from './assign-features/assign-features.component';



@NgModule({
  declarations: [FeaturesListComponent, AddFeatureComponent, AssignFeaturesComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
