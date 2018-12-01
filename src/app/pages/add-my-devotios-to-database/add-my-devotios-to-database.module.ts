import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddMydevotiosToDatabasePage } from './add-my-devotios-to-database';

const routes: Routes = [
  {
    path: '',
    component: AddMydevotiosToDatabasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddMydevotiosToDatabasePage]
})
export class AddMydevotiosToDatabasePageModule {}
