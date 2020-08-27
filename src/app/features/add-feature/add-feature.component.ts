import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.css']
})
export class AddFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    alert('Create feature is coming soon');
  }

}
