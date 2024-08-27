import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostListComponent} from "./components/post-list/post-list.component";
import {postResolver} from "./resolver/posts-resolver";


export const routes: Routes = [
  { path: '', component:PostListComponent, resolve:{ posts: postResolver}}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SocialMediaRoutingModule{

}
