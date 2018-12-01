import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { HomeProvider } from './service/church.service';
import { ToastProvider } from './service/church.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HomePageModule } from './pages/home/home.module';
import { PlansPageModule } from './pages/plans/plans.module';
import { MorePageModule } from './pages/more/more.module';
import { ReadPageModule } from './pages/read/read.module';
import { SettingPageModule } from './pages/setting/setting.module';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { SermonProvider } from './service/church.service';
import { MyDevotionsProvider } from './service/church.service';
import { MyEventsProvider } from './service/church.service';
import { MyBlogProvider } from './service/church.service';
import { MyAnnouncementsProvider } from './service/church.service';
import { MyVerseProvider } from './service/church.service';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment),
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

  bootstrap: [],
  entryComponents: [
    AppComponent,

  ],
  providers: [
    {provide: ErrorHandler, useClass: StatusBar},
    {provide: ErrorHandler, useClass: SplashScreen },
    {provide: ErrorHandler, useClass: ErrorHandler },
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
