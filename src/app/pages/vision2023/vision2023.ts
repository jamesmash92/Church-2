import { Component } from '@angular/core';
import {  App, MenuController, NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the Vision2023Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-vision2023',
  templateUrl: 'vision2023.html',
})
export class Vision2023Page {
    vision: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vision = 'mission';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Vision2023Page');
  }

}
