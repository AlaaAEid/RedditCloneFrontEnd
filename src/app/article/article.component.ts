import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { 
  Article,
  ArticlesService,
  User,
  Comment,
  CommentsService
   } from '../core/';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  currentUser: User;
  canModify: boolean;
  comments:Comment[];
  commentControl= new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
