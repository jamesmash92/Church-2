import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Events } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { MyEventsProvider } from '../../service/church.service';




@Component({
  selector: 'page-list-of-our-events',
  templateUrl: 'list-of-our-events.html',
})
export class ListOfOurEventsPage {

  eventsDataList: Observable<Events[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private eventsprovider: MyEventsProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.eventsDataList = this.eventsprovider
                     .getEvents()
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
