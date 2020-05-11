import { Component, OnInit } from '@angular/core';
import {PostItemComponent} from "../post-item/post-item.component";
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  private posts;
  private date: String;
  private aux: Date;
  private mList;
  constructor(private router: Router) { }

  ngOnInit() {
    this.aux = new Date();
    this.mList = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    this.date = String(this.aux.getDay() + " " + this.mList[this.aux.getMonth()]);
    this.posts = [
      {
        title: "Se cancelan las clases",
        description: "Las clases han sido suspendidas debido al COVID19",
        date: this.date,
        user: "Pedro Sánchez",
        username: "peterSa"
      },
      {
        title: "No se podrá salir a la calle",
        description: "No se podrá salir a la calle hasta nuevo aviso",
        date: this.date,
        user: "Pedro Sánchez",
        username: "peterSa"
      },
      {
        title: "Se están desarrollando vacunas",
        description: "Las clases han sido suspendidas debido al COVID19",
        date: this.date,
        user: "Pedro Sánchez",
        username: "peterSa"
      },
      {
        title: "Amin ponte a trabajar",
        description: "Amin no trabaja, deberíamos echarlo del grupo",
        date: this.date,
        user: "Grupo 11",
        username: "11group"
      }
    ]
  }
  createPost(){
    this.router.navigate(['/postCreate']);
  }

}
