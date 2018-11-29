import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the EditdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-editdetails',
  templateUrl: 'editdetails.html',
})
export class EditdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdetailsPage');
  }

}
