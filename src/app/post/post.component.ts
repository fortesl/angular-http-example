import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { AppError } from '../sogeti-common/error-handling/app-error';
import { BadInput } from '../sogeti-common/error-handling/bad-input-error';
import { NotFoundError } from '../sogeti-common/error-handling/not-found-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  constructor(private postService: PostService) { }
  posts: Post[] = [];

  ngOnInit() {
    this.postService.get()
      .subscribe(
        response => this.posts = response);
  }

  createPost(title) {
    const post = {
      title: title
    };
    this.posts.unshift(post as Post);
    this.postService.post(post as Post)
      .subscribe(
        response => {
          console.log(response);
          post['id'] = response['id'];
        },
        (error: AppError) => {
          console.log(error);
          this.posts.shift();
          if (error instanceof BadInput) {
            alert(`bad post input: ${post}`);
            return;
          }
          throw(error);
        });
  }

  deletePost(post) {
    const postIndex = this.posts.indexOf(post);
    this.posts.splice(postIndex, 1);
    if (postIndex > -1) {
      this.postService.delete(post.id)
        .subscribe(
          null,
          (error: AppError) => {
            this.posts.splice(postIndex, 0, post);
            if (error instanceof NotFoundError) {
              console.log(`${post.title} already deleted`);
              return;
            }
            throw(error);
          }
        );
    }
  }

}
