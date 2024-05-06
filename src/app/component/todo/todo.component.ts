import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  constructor(private apiservice: ApiService) {}
  @Input() todo: any;

  onDeleteButtonClick(): void {
    this.apiservice.deleteTodoById(this.todo.id).subscribe(response => {
      console.log(response);
    });
  }

}
