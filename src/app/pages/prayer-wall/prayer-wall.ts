import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the PrayerWallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-prayer-wall',
  templateUrl: 'prayer-wall.html',
})
export class PrayerWallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayerWallPage');
  }

}
