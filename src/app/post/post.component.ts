import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() posts: string[];


  @Output() onNewPost = new EventEmitter<any>();
  



  constructor() { }

  
  newPost(form):void {
    console.log(form.value.thoughts);
    
     this.onNewPost.emit({title: form.value.title, thoughts: form.value.thoughts});
  }



  ngOnInit() {
  }

}
