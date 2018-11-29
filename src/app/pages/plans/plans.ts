import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the PlansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
})
export class PlansPage {
  devotions: string;





  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.devotions = 'mydevotions';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlansPage');

  }

}
