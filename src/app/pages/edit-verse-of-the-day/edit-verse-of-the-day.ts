import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Verse } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { MyVerseProvider } from '../../service/church.service';



@Component({
  selector: 'page-edit-verse-of-the-day',
  templateUrl: 'edit-verse-of-the-day.html',
})
export class EditVerseOfTheDayPage {

  verse: Verse;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editverseprovider: MyVerseProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.verse = this.navParams.get('verse');
          }

            saveVerse(verse: Verse) {
              this.editverseprovider.editVerse(verse).then(() => {
                this.navCtrl.navigateForward('ListOfTheVerseOfTheDayPage');
              });
            }

            removeVerse(verse: Verse) {
              this.editverseprovider.removeVerse(verse).then(() => {

                this.navCtrl.navigateForward('ListOfTheVerseOfTheDayPage');
              });
            }
          }
