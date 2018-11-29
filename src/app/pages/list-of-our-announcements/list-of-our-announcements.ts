import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Announcements } from '../../../environments/environment';
import { MyAnnouncementsProvider } from '../../service/church.service';



@Component({
  selector: 'page-list-of-our-announcements',
  templateUrl: 'list-of-our-announcements.html',
})
export class ListOfOurAnnouncementsPage {

  announcementsDataList: Observable<Announcements[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private announcementsprovider: MyAnnouncementsProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.announcementsDataList = this.announcementsprovider
                     .getAnnouncements()
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
