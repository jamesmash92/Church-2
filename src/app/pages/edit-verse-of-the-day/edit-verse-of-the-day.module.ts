import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditVerseOfTheDayPage } from './edit-verse-of-the-day';

const routes: Routes = [
  {
    path: '',
    component: EditVerseOfTheDayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditVerseOfTheDayPage]
})
export class EditVerseOfTheDayPageModule {}
