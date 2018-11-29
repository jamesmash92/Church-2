import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Sermon } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { SermonProvider } from '../../service/church.service';



@Component({
  selector: 'page-list-of-sermons-in-settings',
  templateUrl: 'list-of-sermons-in-settings.html',
})
export class ListOfSermonsInSettingsPage {
  sermonData: Observable<Sermon[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private toast: ToastController,
               private sermon: SermonProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.sermonData = this.sermon
                     .getSermon()
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
