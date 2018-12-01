import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllMyDevotionsPage } from './all-my-devotions';

const routes: Routes = [
  {
    path: '',
    component: AllMyDevotionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllMyDevotionsPage]
})
export class AllMyDevotionsPageModule {}
