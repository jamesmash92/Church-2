import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Sermon } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { SermonProvider } from '../../service/church.service';




@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {

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
