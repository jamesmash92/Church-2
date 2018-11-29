import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { CHURCH_CONFIG } from './firebase.authentication';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { HomeProvider } from '../providers/home/home';
import { ToastProvider } from '../providers/toast/toast';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HomePageModule } from '../pages/home/home.module';
import { PlansPageModule } from '../pages/plans/plans.module';
import { MorePageModule } from '../pages/more/more.module';
import { ReadPageModule } from '../pages/read/read.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { SermonProvider } from '../providers/sermon/sermon';
import { MyDevotionsProvider } from '../providers/my-devotions/my-devotions';
import { MyEventsProvider } from '../providers/my-events/my-events';
import { MyBlogProvider } from '../providers/my-blog/my-blog';
import { MyAnnouncementsProvider } from '../providers/my-announcements/my-announcements';
import { MyVerseProvider } from '../providers/my-verse/my-verse';


@NgModule({
  declarations: [
    MyApp,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CHURCH_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HomePageModule,
    PlansPageModule,
    MorePageModule,
    ReadPageModule,
    SettingPageModule,
    HttpModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider,
    ToastProvider,
    InAppBrowser,
    YoutubeVideoPlayer,
    PayPal,
    SermonProvider,
    MyDevotionsProvider,
    MyEventsProvider,
    MyBlogProvider,
    MyAnnouncementsProvider,
    MyVerseProvider,

  ]
})
export class AppModule {}
