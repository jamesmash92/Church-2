import {Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Blog} from '../../../environments/environment';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {ListOfOurBlogPage } from '../list-of-our-blog//list-of-our-blog';
import { Directive, HostListener, ElementRef } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'page-add-our-blog',
  templateUrl: 'add-our-blog.html',
})

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ion-textarea[autosize]' // Attribute selector,
})

// tslint:disable-next-line:directive-class-suffix
export class AddOurBlogPage {

        constructor(
          private afauth: AngularFireAuth,
          private afDatabase: AngularFireDatabase,
          public navCtrl: NavController,
          public navParams: NavParams,
          public element: ElementRef) {
        }

       blog = {} as Blog;

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



            createBlog() {
                this.afauth.authState.pipe(take(1)).subscribe(auth => {
                this.afDatabase.list(`blog`).push(this.blog)
                .then(() => this.navCtrl.navigateForward('ListOfOurBlogPage'));
              });
            }

      }
