import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  msg:string;
  pageCanLeave:boolean = true;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.msg = this.navParams.get('message');
  }

  backToHomepage(){
    this.navCtrl.pop({
      animate:true,
      animation:'wp-transition'
    });
  }

  navigateToThirdPage(){
    this.navCtrl.push('ThirdPage',null,{
      animate:true,
      animation:'ios-transition'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SecondPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SecondPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave SecondPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave SecondPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload SecondPage');
  }

  togglePageCanLeave(){
    this.pageCanLeave = !this.pageCanLeave;
  }

  ionViewCanLeave(){
    return this.pageCanLeave;
  }

}
