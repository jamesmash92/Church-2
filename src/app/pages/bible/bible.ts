import { Component } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the BiblePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblePage');
  }

}
