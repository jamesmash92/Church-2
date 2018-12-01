import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditMyDevotionsPage } from './edit-my-devotions';

const routes: Routes = [
  {
    path: '',
    component: EditMyDevotionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditMyDevotionsPage]
})
export class EditMyDevotionsPageModule {}
