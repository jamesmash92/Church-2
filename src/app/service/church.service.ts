import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Profile } from '../../environments/environment';
import { Announcements } from '../../environments/environment';
import { Blog } from '../../environments/environment';
import { Devotions } from '../../environments/environment';
import { Events } from '../../environments/environment';
import { Verse } from '../../environments/environment';
import { Sermon } from '../../environments/environment';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

// profile
export class HomeProvider {

  private profile = this.afDatabase.list<Profile>('profile');

  constructor(private afDatabase: AngularFireDatabase) {}

  getProfile() {

    return this.profile;

  }
  editProfile(profile: Profile) {
    return this.profile.update(profile.key, profile);
  }
  removeProfile(profile: Profile) {
  return this.profile.remove(profile.key);

}

}

// announcement
export class MyAnnouncementsProvider {

  private announcementsListRef = this.afDatabase.list<Announcements>('announcements');


  constructor(private afDatabase: AngularFireDatabase) {}


  getAnnouncements() {

    return this.announcementsListRef;

  }
  addAnnouncements(announcements: Announcements) {
        return this.announcementsListRef.push(announcements);
        }

  editAnnouncements(announcements: Announcements) {
    return this.announcementsListRef.update(announcements.key, announcements);
        }
  removeAnnouncements(announcements: Announcements) {
    return this.announcementsListRef.remove(announcements.key);

  }

  }
  // blog
export class MyBlogProvider {

  private blogListRef = this.afDatabase.list<Blog>('blog');


  constructor(private afDatabase: AngularFireDatabase) {}


  getBlog() {

    return this.blogListRef;

  }
  addBlog(blog: Blog) {
        return this.blogListRef.push(blog);
        }

  editBlog(blog: Blog) {
    return this.blogListRef.update(blog.key, blog);
        }
  removeBlog(blog: Blog) {
    return this.blogListRef.remove(blog.key);

  }

  }

  // devotions
  export class MyDevotionsProvider {

    private devotionsListRef = this.afDatabase.list<Devotions>('devotions');


    constructor(private afDatabase: AngularFireDatabase) {}


    getDevotions() {

      return this.devotionsListRef;

    }
    addDevotions(devotions: Devotions) {
          return this.devotionsListRef.push(devotions);
          }

    editDevotions(devotions: Devotions) {
      return this.devotionsListRef.update(devotions.key, devotions);
          }
    removeDevotions(devotions: Devotions) {
      return this.devotionsListRef.remove(devotions.key);

    }

    }

    // events
    export class MyEventsProvider {
      private eventsListRef = this.afDatabase.list<Events>('events');


      constructor(private afDatabase: AngularFireDatabase) {}


      getEvents() {

        return this.eventsListRef;

      }
      addEvents(events: Events) {
            return this.eventsListRef.push(events);
            }

      editEvents(events: Events) {
        return this.eventsListRef.update(events.key, events);
            }
      removeEvents(events: Events) {
        return this.eventsListRef.remove(events.key);

      }

      }
      // toast
      export class ToastProvider {

        constructor(
          private toastCtrl: ToastController) {}

          show(message: string, duration: number = 1000) {
            return this.toastCtrl
            .create({
              message,
              duration,
            })
            .catch();
          }

      }
      // verse
      export class MyVerseProvider {
        private verseListRef = this.afDatabase.list<Verse>('verse');


        constructor(private afDatabase: AngularFireDatabase) {}


        getVerse() {

          return this.verseListRef;

        }
        addVerse(verse: Verse) {
              return this.verseListRef.push(verse);
              }

        editVerse(verse: Verse) {
          return this.verseListRef.update(verse.key, verse);
              }
        removeVerse(verse: Verse) {
          return this.verseListRef.remove(verse.key);

        }

        }
        // sermon
        export class SermonProvider {

          private sermonListRef = this.afDatabase.list<Sermon>('sermon');


        constructor(private afDatabase: AngularFireDatabase) {}


          getSermon() {

            return this.sermonListRef;

          }
          addSermon(sermon: Sermon) {
                return this.sermonListRef.push(sermon);
                }

          editSermon(sermon: Sermon) {
            return this.sermonListRef.update(sermon.key, sermon);
                }
          removeSermon(sermon: Sermon) {
            return this.sermonListRef.remove(sermon.key);

          }

        }

