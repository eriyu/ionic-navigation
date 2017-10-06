import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  pageCanEnter:boolean = true;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.pageCanEnter = this.navParams.get('pageCanEnter');
  }

  setRootPageToHome(){
    this.navCtrl.setRoot('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ThirdPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ThirdPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave ThirdPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave ThirdPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload ThirdPage');
  }

  ionViewCanEnter(){
    return this.pageCanEnter;
  }

}
