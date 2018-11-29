import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Profile } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HomeProvider } from '../../service/church.service';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  profileData: Observable<Profile[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private toast: ToastController,
              private profile: HomeProvider,
              private afDatabase: AngularFireDatabase) {

                {

      this.profileData = this.profile
      .getProfile()
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

  ionViewWillLoad() {
    this.afauth.authState.subscribe(data => {
      if (data && data.email && data.uid) {

      this.toast.create({
        message: `Welcome to Church App, ${data.email}`,
        duration: 3000,
      }).catch();
    } else {
      this.toast.create({
        message: `could not find authentication details`,
        duration: 3000,
      }).catch();
    }

    });
  }

}
