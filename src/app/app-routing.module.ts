import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'add-my-devotios-to-database', loadChildren: './add-my-devotios-to-database/add-my-devotios-to-database.module#AddMyDevotiosToDatabasePageModule' },
  { path: 'add-our-announcements', loadChildren: './add-our-announcements/add-our-announcements.module#AddOurAnnouncementsPageModule' },
  { path: 'add-our-blog', loadChildren: './add-our-blog/add-our-blog.module#AddOurBlogPageModule' },
  { path: 'add-our-events', loadChildren: './add-our-events/add-our-events.module#AddOurEventsPageModule' },
  { path: 'add-verse-of-the-day', loadChildren: './add-verse-of-the-day/add-verse-of-the-day.module#AddVerseOfTheDayPageModule' },
  { path: 'all-my-devotions', loadChildren: './all-my-devotions/all-my-devotions.module#AllMyDevotionsPageModule' },
  { path: 'announcements', loadChildren: './announcements/announcements.module#AnnouncementsPageModule' },
  { path: 'bible', loadChildren: './bible/bible.module#BiblePageModule' },
  { path: 'biblestudy', loadChildren: './biblestudy/biblestudy.module#BiblestudyPageModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'church-tabs', loadChildren: './church-tabs/church-tabs.module#ChurchTabsPageModule' },
  { path: 'default', loadChildren: './default/default.module#DefaultPageModule' },
  { path: 'editdetails', loadChildren: './editdetails/editdetails.module#EditdetailsPageModule' },
  { path: 'edit-my-devotions', loadChildren: './edit-my-devotions/edit-my-devotions.module#EditMyDevotionsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
