import {Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Sermon} from '../../../environments/environment';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { Directive, HostListener, ElementRef } from '@angular/core';



@Component({
  selector: 'page-post-sermon',
  templateUrl: 'post-sermon.html',
})
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ion-textarea[autosize]' // Attribute selector,
})
// tslint:disable-next-line:directive-class-suffix
export class PostSermonPage {

    constructor(
      private afauth: AngularFireAuth,
      private afDatabase: AngularFireDatabase,
      public navCtrl: NavController,
      public navParams: NavParams,
      public element: ElementRef) {
    }



   sermon = {} as Sermon;

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



        createsermon() {
            this.afauth.authState.take(1).subscribe(auth => {
            this.afDatabase.list(`sermon`).push(this.sermon)
            .then(() => this.navCtrl.navigateForward('ListOfSermonsInSettingsPage'));
          });
        }

  }
