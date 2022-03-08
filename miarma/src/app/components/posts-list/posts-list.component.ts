import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Post } from 'src/app/interfaces/post/post_response';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postsList : Post[] = [];

  constructor(private postService : PostServiceService) { }

  ngOnInit(): void {
    this.getPostsList();
  }
  
  getPostsList(){
    this.postService.getPosts().subscribe(result => {
      this.postsList = result.content;
    })
  }

  deletePost(id : number){
    this.postService.deletePosts(id).subscribe(location.reload);
  }

}
