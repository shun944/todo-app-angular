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
}
