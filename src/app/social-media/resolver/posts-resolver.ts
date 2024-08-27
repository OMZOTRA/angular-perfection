import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsModel} from "../models/posts.model";
import {PostsService} from "../services/posts-service";

export const postResolver: ResolveFn<PostsModel[]> = (
  route,
  state
): Observable<PostsModel[]> => {
  const postsService = inject(PostsService);
  return postsService.getPosts()
};
