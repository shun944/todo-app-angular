import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetUserInfoService } from 'src/app/service/get-user-info.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss']
})
export class TodoFormDialogComponent {
  constructor(
    private getUserInfoService: GetUserInfoService,
    private apiservice: ApiService,
    public dialogRef: MatDialogRef<TodoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.backdropClick().subscribe(() => {
        this.dialogRef.close();
      });
    }

    user_id = this.getUserInfoService.getUserId();

    createParams = {
      "todo": {
        "title": "",
        "description": "",
        "due_date": "",
        "user_id": this.user_id
      }
    };

    createTodo() {
      this.apiservice.createTodo(this.createParams).subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
    }

    form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      due_date: new FormControl(''),
    });

    onSubmit(): void {
      this.setCreateTodoParams(this.form.value);
      this.createTodo();
      this.dialogRef.close();
    }

    private setCreateTodoParams(value: any) {
      this.createParams.todo.title = value.title;
      this.createParams.todo.description = value.description;
      this.createParams.todo.due_date = value.due_date;
    }

}
