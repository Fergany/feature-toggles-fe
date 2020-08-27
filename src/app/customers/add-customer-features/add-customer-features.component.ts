import { Component, OnInit } from '@angular/core';
import { AddCustomerFeaturesService } from './add-customer-features.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-customer-features',
  templateUrl: './add-customer-features.component.html',
  styleUrls: ['./add-customer-features.component.css']
})
export class AddCustomerFeaturesComponent implements OnInit {
  customerId: String;
  features: any;
  isDataAvailable: boolean = false;

  constructor(private route: ActivatedRoute, private service: AddCustomerFeaturesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get("id")
    });
    this.service.getUnassignedFeatures(this.customerId).subscribe(res => {
      this.features = res;
      this.isDataAvailable = true;
      console.log("FEATURES: ", this.features);
      
    });
  }
}
