import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { GetUserInfoService } from './service/get-user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos: any;
  constructor(
    private apiservice: ApiService,
    private getUserInfoService: GetUserInfoService,
  ) {}
  //apiservice = inject(ApiService);
  user_id = this.getUserInfoService.getUserId();

  ngOnInit(): void {
    const params = { user_id: this.user_id }
    this.apiservice.getTodos(params).subscribe((data) => {
      this.todos = data;
      console.log(this.todos);
      console.log(this.todos[1].title);
    });
  }

  title = 'todo-app-new';
}
