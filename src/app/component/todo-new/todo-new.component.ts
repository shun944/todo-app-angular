import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../todo-form-dialog/todo-form-dialog.component';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss']
})
export class TodoNewComponent {
  constructor(public dialog: MatDialog) {}

  onCreateButtonClick(): void {
    const dialogRef = this.dialog.open(TodoFormDialogComponent, {
      disableClose: true,
      width: '250px',
      height: '250px',
      //position: { top: '50%', left: '50%' },
      data: {title: 'New Todo'}
    });
  }
}

