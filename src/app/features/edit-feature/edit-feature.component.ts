import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditFeatureService } from './edit-feature.service';

@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.css']
})
export class EditFeatureComponent implements OnInit {
  feature: any;
  featureId: string;

  constructor(private route: ActivatedRoute, private service :EditFeatureService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.featureId = params.get("id")
    });
    this.service.getFeature(this.featureId).subscribe(res => {
        this.feature = res;
        console.log("FEATURE: ", this.feature);
  
      });
  }

  edit() {
    alert('Edit feature is coming soon');
  }

}
