import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import {Blog } from '../../../environments/environment';



@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  blog: Blog;

   constructor(public navCtrl: NavController,
               public navParams: NavParams) {}
             ionViewWillLoad() {
             this.blog = this.navParams.get('blog');
           }
        }
