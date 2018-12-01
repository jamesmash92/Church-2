import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YouthMinistryPage } from './youth-ministry';

const routes: Routes = [
  {
    path: '',
    component: YouthMinistryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YouthMinistryPage]
})
export class YouthMinistryPageModule {}
