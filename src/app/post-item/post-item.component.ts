import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {LikeClickedEvent} from '../likes/likes.component';
import {LikeService} from "../services/like.service";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  private user: any;
  private likes: any;
  @Input() post;
  values : Map<string, boolean> = new Map();

  constructor( private router: Router, private userService: UserService,
               private likeService: LikeService) { }

  ngOnInit() {
   this.userService.getUserByEmail(this.post.email).subscribe((user)=>{
     this.user = {...user};
   });
    this.likes = this.likeService.getLikesByPostId(this.post.id);
  }
  goToDetails(id){
    id ? this.router.navigate(['/post-details', id]) : "";
  }

  handleEvent(event: LikeClickedEvent){
    this.values.set(event.postId + "-" + event.userId, event.like);
  }

}
