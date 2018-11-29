import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'page-church-tabs',
  templateUrl: 'church-tabs.html'
})
export class ChurchTabsPage {

  homeRoot = 'DefaultPage';
  readRoot = 'ReadPage';
  plansRoot = 'PlansPage';
  settingRoot = 'SettingPage';
  moreRoot = 'MorePage';



  constructor(public navCtrl: NavController) {}

}
