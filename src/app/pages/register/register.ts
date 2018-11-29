import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {User} from '../../../environments/environment';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private aFuth: AngularFireAuth,
    private afdb: AngularFireDatabase) {
  }

async register(user: User) {
  try {
  const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  console.log(result);

  this.navCtrl.navigateForward('ProfilePage');


} catch (e) {
  console.log(e);

}
}
}
