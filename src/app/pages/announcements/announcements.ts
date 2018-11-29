import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { Announcements} from '../../../environments/environment';


@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html',
})
export class AnnouncementsPage {


    announcements: Announcements;

     constructor(public navCtrl: NavController,
                 public navParams: NavParams) {}
               ionViewWillLoad() {
               this.announcements = this.navParams.get('announcements');
             }
          }
