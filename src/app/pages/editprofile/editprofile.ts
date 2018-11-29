import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { HomeProvider } from '../../service/church.service';
import { Profile } from '../../../environments/environment';
import { ToastProvider } from '../../service/church.service';



@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private homeedit: HomeProvider,
    private toast: ToastProvider) {
  }

  ionViewWillLoad() {
  this.profile = this.navParams.get('profile');
}
  SaveProfile(profile: Profile) {

    this.homeedit.editProfile(profile).then(() => {
      this.toast.show(`${profile.username} saved!`);
      this.navCtrl.navigateForward('ProfiledetailPage');
    });

  }

  removeProfile(profile: Profile) {

    this.homeedit.removeProfile(profile).then(() => {
      this.toast.show(`${profile.username} deleted!`);
      this.navCtrl.navigateForward('ProfiledetailPage');
    });

  }

}
