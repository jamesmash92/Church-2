
import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Profile} from '../../../environments/environment';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

 profile = {} as Profile;

  constructor( private afauth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  createprofile() {
    this.afauth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.navCtrl.navigateForward('ProfiledetailPage'));
    });

  }

}
