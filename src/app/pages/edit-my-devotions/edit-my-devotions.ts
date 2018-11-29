import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Devotions } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { MyDevotionsProvider } from '../../service/church.service';


@Component({
  selector: 'page-edit-my-devotions',
  templateUrl: 'edit-my-devotions.html',
})
export class EditMyDevotionsPage {
  devotions: Devotions;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editdevotionsprovider: MyDevotionsProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.devotions = this.navParams.get('devotions');
          }

            saveDevotions(devotions: Devotions) {
              this.editdevotionsprovider.editDevotions(devotions).then(() => {
                this.navCtrl.navigateForward('AllMyDevotionsPage');
              });
            }

            removeDevotions(devotions: Devotions) {
              this.editdevotionsprovider.removeDevotions(devotions).then(() => {

                this.navCtrl.navigateForward('AllMyDevotionsPage');
              });
            }
          }
