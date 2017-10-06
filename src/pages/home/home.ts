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
    this.navCtrl.push('SecondPage',{
      message:'from homepage'
    });
  }

  navigateToAboutPage() {
    this.navCtrl.push('AboutPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter HomePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave HomePage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave HomePage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload HomePage');
  }

}
