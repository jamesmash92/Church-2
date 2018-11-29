import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Devotions } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { MyDevotionsProvider } from '../../service/church.service';


@Component({
  selector: 'page-all-my-devotions',
  templateUrl: 'all-my-devotions.html',
})
export class AllMyDevotionsPage {

  devotionsDataList: Observable<Devotions[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private devotionsprovider: MyDevotionsProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.devotionsDataList = this.devotionsprovider
                     .getDevotions()
                     .snapshotChanges()
                     .map(
                       changes => {
                         return changes.map(c => ({
                           key: c.payload.key, ...c.payload.val(),
                         }));
                       }
                     );
               }
             }

  }
