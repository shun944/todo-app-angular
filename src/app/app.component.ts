import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './service/api.service';
import { GetUserInfoService } from './service/get-user-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private apiservice: ApiService,
    private getUserInfoService: GetUserInfoService,
  ) {}
  private subscription!: Subscription;
  todos: any;
  //apiservice = inject(ApiService);

  user_id = this.getUserInfoService.getUserId();

  ngOnInit(): void {
    const params = { user_id: this.user_id }
    this.apiservice.getTodos(params).subscribe((data) => {
      this.todos = data;
    });
    this.subscription = this.apiservice.todoModified.subscribe(() => {
      this.apiservice.getTodos(params).subscribe((data) => {
        this.todos = data;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  title = 'todo-app-new';
}
