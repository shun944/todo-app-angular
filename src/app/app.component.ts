import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos: any;
  constructor(private apiservice: ApiService) {}
  //apiservice = inject(ApiService);

  ngOnInit(): void {
    this.apiservice.fetchTodos().subscribe((data) => {
      this.todos = data;
      console.log(this.todos);
      console.log(this.todos[1].title);
    });
  }

  title = 'todo-app-new';
}
