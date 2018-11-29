import {Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Events} from '../../../environments/environment';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {ListOfOurEventsPage } from '../list-of-our-events/list-of-our-events';
import { Directive, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'page-add-our-events',
  templateUrl: 'add-our-events.html',
})
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ion-textarea[autosize]' // Attribute selector,
})

// tslint:disable-next-line:directive-class-suffix
export class AddOurEventsPage {

    constructor(
      private afauth: AngularFireAuth,
      private afDatabase: AngularFireDatabase,
      public navCtrl: NavController,
      public navParams: NavParams,
      public element: ElementRef) {
    }



   events = {} as Events;
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



        createEvents() {
            this.afauth.authState.take(1).subscribe(auth => {
            this.afDatabase.list(`events`).push(this.events)
            .then(() => this.navCtrl.navigateForward('ListOfOurEventsPage'));
          });
        }

  }
