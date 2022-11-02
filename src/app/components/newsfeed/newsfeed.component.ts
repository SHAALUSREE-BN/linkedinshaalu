import { Component, Input, OnInit } from '@angular/core';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { EventEmitterService } from 'src/event-emitter.service'; 

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})

export class NewsfeedComponent implements OnInit {
  showPopupVar = false;
  searchTag : any;
  public _postsList : Post[] | undefined;
  postMsg: any;
  constructor(private db: AngularFireDatabase,private eventEmitterService: EventEmitterService) { 
    this.getStarted();
  }

  writePost(){
    var timestamp = Date.now();
    var objToPost = {
      "data": this.postMsg,
      "dp": "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
      "img": "https://www.gstatic.com/webp/gallery/1.png",
      "job": "Angular developer",
      "name": "Shaalu Sree",
      "timestamp": timestamp,
      "type": "1st"
    };

    this.db.object('posts/' + timestamp).set(objToPost);
    this.getStarted();
    this.postMsg = "";
  }

  async getStarted() {
    var posts: Post[] | undefined;
    await this.getPostsFromDatabase().then(value => {
      posts = value as Post[];
    });
    this._postsList = posts;
  }

  getPostsFromDatabase() {
    return new Promise((resolve, reject) => {
      this.db.list('posts').valueChanges().subscribe(value => {
        resolve(value);
      });
    });
  }



  ngOnInit() {
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((searchQuery:string) => {    
        this.search(searchQuery);    
      });    
    }    

  }

  showPopup(){
    this.showPopupVar = true;
  }
 
  async search($searchQuery:any) {
    var searchPosts: Post[] | undefined;
    await this.getPostsFromDatabaseSearch($searchQuery).then(value => {
      searchPosts = value as Post[];
    });
    this._postsList = searchPosts;
  }

  getPostsFromDatabaseSearch($searchQuery: any) {
    return new Promise((resolve, reject) => {
      this.db.list('posts', ref => ref.orderByChild('data').startAt($searchQuery).endAt($searchQuery + "\uf8ff")).valueChanges().subscribe(value => {
        resolve(value);
      });
    });
  }

}

class Post {
  data: string | undefined;
  dp: string | undefined;
  img: string | undefined;
  job: string | undefined;
  name: string | undefined;
  timestamp: string | undefined;
  type: string | undefined
}