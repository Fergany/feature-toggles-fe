import { Component, OnInit } from '@angular/core';
import { CustomersListService } from './customers-list.service';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any;
  isDataAvailable: boolean = false;

  constructor(private service: CustomersListService) { }
  ngOnInit(): void {
    this.service.listCustomers().subscribe(res => {
      this.customers = res;
      this.isDataAvailable = true;
      console.log("CUSTOMERS: ", this.customers);
      
    });
  }

}
