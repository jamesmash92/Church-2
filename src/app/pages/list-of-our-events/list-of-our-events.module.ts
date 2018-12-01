import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfOurEventsPage } from './list-of-our-events';

const routes: Routes = [
  {
    path: '',
    component: ListOfOurEventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfOurEventsPage]
})
export class ListOfOurEventsPageModule {}
