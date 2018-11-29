import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Blog } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { MyBlogProvider } from '../../service/church.service';



@Component({
  selector: 'page-list-of-our-blog',
  templateUrl: 'list-of-our-blog.html',
})
export class ListOfOurBlogPage {

  blogDataList: Observable<Blog[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private blogprovider: MyBlogProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.blogDataList = this.blogprovider
                     .getBlog()
                     .snapshotChanges()
                     .map(
                       changes => {
                         return changes.map(c => ({
                           key: c.payload.key, ...c.payload.val(),
                         }));
                       }
                     );
               }
             }

  }
