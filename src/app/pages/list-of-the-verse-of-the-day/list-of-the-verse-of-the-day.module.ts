import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfTheVerseOfTheDayPage } from './list-of-the-verse-of-the-day';

const routes: Routes = [
  {
    path: '',
    component: ListOfTheVerseOfTheDayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfTheVerseOfTheDayPage]
})
export class ListOfTheVerseOfTheDayPageModule {}
