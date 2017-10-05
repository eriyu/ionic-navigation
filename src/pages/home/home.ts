import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  navigateToSecondPage() {
    this.navCtrl.push('SecondPage');
  }

  navigateToAboutPage() {
    this.navCtrl.push('AboutPage');
  }

}
