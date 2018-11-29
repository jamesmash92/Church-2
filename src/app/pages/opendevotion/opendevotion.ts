import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the OpendevotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-opendevotion',
  templateUrl: 'opendevotion.html',
})
export class OpendevotionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpendevotionPage');
  }

}
