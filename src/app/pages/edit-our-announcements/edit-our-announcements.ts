import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Announcements } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { MyAnnouncementsProvider } from '../../service/church.service';



@Component({
  selector: 'page-edit-our-announcements',
  templateUrl: 'edit-our-announcements.html',
})
export class EditOurAnnouncementsPage {
  announcements: Announcements;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editannouncementsprovider: MyAnnouncementsProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.announcements = this.navParams.get('announcements');
          }

            saveAnnouncements(announcements: Announcements) {
              this.editannouncementsprovider.editAnnouncements(announcements).then(() => {
                this.navCtrl.navigateForward('ListOfOurAnnouncementsPage');
              });
            }

            removeAnnouncements(announcements: Announcements) {
              this.editannouncementsprovider.removeAnnouncements(announcements).then(() => {

                this.navCtrl.navigateForward('ListOfOurAnnouncementsPage');
              });
            }
          }
