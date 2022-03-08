import { Component, Input, OnInit } from '@angular/core';
import { PostDTO } from 'src/app/interfaces/post/postDTO';
import { Post, PostResponse } from 'src/app/interfaces/post/post_response';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() postInput!: Post;

  constructor(private postService : PostServiceService) { }

  ngOnInit(): void {
  }

  deletePost(id : number){
    this.postService.deletePosts(id).subscribe(() => {location.reload()});
  }

}
