import { Component } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the BiblestudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-biblestudy',
  templateUrl: 'biblestudy.html',
})
export class BiblestudyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblestudyPage');
  }

}
