import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditOurAnnouncementsPage } from './edit-our-announcements';

const routes: Routes = [
  {
    path: '',
    component: EditOurAnnouncementsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditOurAnnouncementsPage]
})
export class EditOurAnnouncementsPageModule {}
