import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PostsModel} from "../models/posts.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {
  }
  getPosts():Observable<PostsModel[]>{
   return  this.http.get<PostsModel[]>(`${environment.apiUrl}/posts`)
  }
}
