import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddOurAnnouncementsPage } from './add-our-announcements';

const routes: Routes = [
  {
    path: '',
    component: AddOurAnnouncementsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddOurAnnouncementsPage]
})
export class AddOurAnnouncementsPageModule {}
