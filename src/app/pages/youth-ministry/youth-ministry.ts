import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Verse } from '../../../environments/environment';
import { MyVerseProvider } from '../../service/church.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the YouthMinistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-youth-ministry',
  templateUrl: 'youth-ministry.html',
})
export class YouthMinistryPage {
    youth: string;
    [x: string]: any;
    verseDataList: Observable<Verse[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private verseprovider: MyVerseProvider) {
    {
        this.verseDataList = this.verseprovider
        .getVerse()
        .snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );
  }

      this.youth = 'welcome';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YouthMinistryPage');
  }

}
