import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddVerseOfTheDayPage } from './add-verse-of-the-day';

const routes: Routes = [
  {
    path: '',
    component: AddVerseOfTheDayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddVerseOfTheDayPage]
})
export class AddVerseOfTheDayPageModule {}
