import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerseOfTheDayPage } from './verse-of-the-day';

const routes: Routes = [
  {
    path: '',
    component: VerseOfTheDayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerseOfTheDayPage]
})
export class VerseOfTheDayPageModule {}
