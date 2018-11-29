import {Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Devotions} from '../../../environments/environment';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {AllMyDevotionsPage } from '../all-my-devotions/all-my-devotions';
import { Directive, HostListener, ElementRef } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'page-add-my-devotios-to-database',
  templateUrl: 'add-my-devotios-to-database.html',
})

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-ion-textarea[autosize]' // Attribute selector,
})

export class AddMydevotiosToDatabasePageModuleDirective {

      constructor(
        private afauth: AngularFireAuth,
        private afDatabase: AngularFireDatabase,
        public navCtrl: NavController,
        public navParams: NavParams,
        public element: ElementRef) {
      }



     devotions = {} as Devotions;


    @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
      this.adjust();
    }

      AfterViewInit() {
        this.adjust();
      }

      adjust(): void {
        const textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = (textArea.scrollHeight + 42) + 'px';
      }



          createdevotions() {
              this.afauth.authState.take(1).subscribe(auth => {
              this.afDatabase.list(`devotions`).push(this.devotions)
              .then(() => this.navCtrl.navigateForward('AllMyDevotionsPage'));
            });
          }

    }
