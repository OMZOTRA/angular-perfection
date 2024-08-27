import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialMediaRoutingModule} from "./social-media.routing.module";
import {provideHttpClient} from "@angular/common/http";
import {PostsService} from "./services/posts-service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
  ],
  providers:[provideHttpClient(), PostsService]
})
export class SocialMediaModule { }
