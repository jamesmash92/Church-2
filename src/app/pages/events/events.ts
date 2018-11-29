import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import {Events } from '../../../environments/environment';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

    events: Events;

     constructor(public navCtrl: NavController,
                 public navParams: NavParams) {}
               ionViewWillLoad() {
               this.events = this.navParams.get('events');
             }
          }
