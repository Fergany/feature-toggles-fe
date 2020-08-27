import { Component, OnInit } from '@angular/core';
import { FeaturesListService } from './features-list.service';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.css']
})
export class FeaturesListComponent implements OnInit {
  features: any;
  isDataAvailable: boolean = false;

  constructor(private service: FeaturesListService) { }

  ngOnInit(): void {
    this.service.listFeatures().subscribe(res => {
      this.features = res;
      this.isDataAvailable = true;
      console.log("FEATURES: ", this.features);
    });

}
}
