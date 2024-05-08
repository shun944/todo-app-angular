import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../todo-form-dialog/todo-form-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  constructor(
    private apiservice: ApiService,
    public dialog: MatDialog,
  ) {}
  @Input() todo: any;

  onDeleteButtonClick(): void {
    this.apiservice.deleteTodoById(this.todo.id).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

  onUpdateButtonClick(): void {
    const dialogRef = this.dialog.open(TodoFormDialogComponent, {
      disableClose: true,
      width: '250px',
      height: '250px',
      data: {title: 'Edit Todo', todo: this.todo}
  });
  }

  onCheckBoxChange(): void {
    var completed = !this.todo.completed;
    console.log(completed);
    this.apiservice.updateTodoById(this.todo.id, {todo: {completed: completed}}).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
}
