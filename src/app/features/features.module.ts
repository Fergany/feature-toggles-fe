import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesListComponent } from './features-list/features-list.component';
import { AddFeatureComponent } from './add-feature/add-feature.component';
import { EditFeatureComponent } from './edit-feature/edit-feature.component';

@NgModule({
  declarations: [FeaturesListComponent, AddFeatureComponent, EditFeatureComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
