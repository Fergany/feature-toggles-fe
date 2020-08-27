import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesListComponent } from './features-list/features-list.component';
import { AddFeatureComponent } from './add-feature/add-feature.component';

@NgModule({
  declarations: [FeaturesListComponent, AddFeatureComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
