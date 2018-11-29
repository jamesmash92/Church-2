import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

/**
 * Generated class for the SermoncommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-sermoncomments',
  templateUrl: 'sermoncomments.html',
})
export class SermoncommentsPage {

  public event = {
    month: '2018-05-29',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SermoncommentsPage');
  }

}
