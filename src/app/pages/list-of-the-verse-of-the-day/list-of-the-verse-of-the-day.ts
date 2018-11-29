import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Verse } from '../../../environments/environment';
import { MyVerseProvider } from '../../service/church.service';


@Component({
  selector: 'page-list-of-the-verse-of-the-day',
  templateUrl: 'list-of-the-verse-of-the-day.html',
})
export class ListOfTheVerseOfTheDayPage {

 verseDataList: Observable<Verse[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private verseprovider: MyVerseProvider,
               private afDatabase: AngularFireDatabase) {


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
             }

  }
