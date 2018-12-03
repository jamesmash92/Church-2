import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

/**
 * Generated class for the GivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-give',
  templateUrl: 'give.html',
})
export class GivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private payPal: PayPal) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GivePage');
  }



}
