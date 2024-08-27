import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {PostsModel} from "../../models/posts.model";
import {AsyncPipe, JsonPipe, NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {PostListItemComponent} from "../post-list-item/post-list-item.component";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    JsonPipe,
    PostListItemComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit{
  posts$!: Observable<PostsModel[]>
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.posts$ = this.route.data.pipe(
      map((data) =>  data['posts'])
    )
  }

}
