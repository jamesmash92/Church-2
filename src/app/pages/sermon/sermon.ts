import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { Sermon } from '../../../environments/environment';


@Component({
  selector: 'page-sermon',
  templateUrl: 'sermon.html',
})
export class SermonPage {

  sermon: Sermon;

   constructor(public navCtrl: NavController,
               public navParams: NavParams) {}
             ionViewWillLoad() {
             this.sermon = this.navParams.get('sermon');
           }
        }
