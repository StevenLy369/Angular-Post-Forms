import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from "../post";


@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  @Output() onAddPost = new EventEmitter<any>();

  socialPost: Post[] = [
    {
      title: "dog",
      thoughts: "bark bark"
    },
    {
      title: "cat",
      thoughts: "meow"
    },
    {
      title:"cow",
      thoughts:"moo"
    },


  ];
 

  constructor() { }


  removePost(index){
    console.log(index);
    this.socialPost.splice(index, 1);
  }

  addPost(form){
    
    //  this.onAddPost.emit({title: form.value.titleToAdd, thought:form.value.thoughtToAdd});


  }
  ngOnInit() {
  }

}
