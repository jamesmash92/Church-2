import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { User } from '../../../environments/environment';
import { RegisterPage} from '../register/register';
import { DefaultPage} from '../default/default';
import { AngularFireAuth} from 'angularfire2/auth';
import { ProfiledetailPage } from '../profiledetail/profiledetail';


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
  })
  export class LoginPage {

  user = {} as User;

      constructor(public navCtrl: NavController,
                  public navParams: NavParams,
                  private afAuth: AngularFireAuth) {}

                  async login(user: User) {
                    try {
                      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

                      if (result) {
                        this.navCtrl.navigateForward('ChurchTabsPage');

                        console.log(result);
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }

                  register() {
                    this.navCtrl.navigateForward('DefaultPage');
                  }
                }
