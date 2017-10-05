import { Component } from '@angular/core';

@Component({
  selector: 'feature',
  templateUrl: 'feature.html'
})
export class FeatureComponent {

  text: string;

  constructor() {
    this.text = 'Feature';
  }

}
