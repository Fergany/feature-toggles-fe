import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerFeaturesListService } from './customer-features-list.service';

@Component({
  selector: 'app-customer-features-list',
  templateUrl: './customer-features-list.component.html',
  styleUrls: ['./customer-features-list.component.css']
})
export class CustomerFeaturesListComponent implements OnInit {

  customerId: String;
  customerFeatures: any;
  isDataAvailable:boolean = false;

  constructor(private route: ActivatedRoute, private service: CustomerFeaturesListService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get("id")
    });
    
    this.service.getFeatures(this.customerId).subscribe(res =>{
      this.customerFeatures = res;
      this.isDataAvailable = true;
      console.log("CUSTOMERS_FEATURES: ", this.customerFeatures);
    });
  }

}
