import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { User } from '../../../environments/environment';
import { AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the LogtobePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-logtobe',
  templateUrl: 'logtobe.html',
})
export class LogtobePage {
  user = {} as User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth) {
    }

  async login(user: User) {
    try {
    const result = this.aFauth.auth.signInWithEmailAndPassword(user.email, user.password);

  if (result) {
    this.navCtrl.navigateForward('EditdetailsPage');
    }
  } catch (e) {
    console.log(e);
  }
  }
  }
