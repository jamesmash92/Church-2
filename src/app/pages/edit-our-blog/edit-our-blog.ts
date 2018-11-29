import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Blog } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { MyBlogProvider } from '../../service/church.service';


@Component({
  selector: 'page-edit-our-blog',
  templateUrl: 'edit-our-blog.html',
})
export class EditOurBlogPage {

  blog: Blog;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editblogprovider: MyBlogProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.blog = this.navParams.get('blog');
          }

            saveBlog(blog: Blog) {
              this.editblogprovider.editBlog(blog).then(() => {
                this.navCtrl.navigateForward('ListOfOurBlogPage');
              });
            }

            removeBlog(blog: Blog) {
              this.editblogprovider.removeBlog(blog).then(() => {

                this.navCtrl.navigateForward('ListOfOurBlogPage');
              });
            }
          }
