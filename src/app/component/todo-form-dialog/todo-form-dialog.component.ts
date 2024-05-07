import { Component, Inject, Input } from '@angular/core';
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

    //@Input() todo: any;

    ngOnInit(): void {
      if(this.data.todo) {
        this.form.setValue({
          title: this.data.todo.title,
          description: this.data.todo.description,
          due_date: this.data.todo.due_date,
        });
      }
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

    updateTodo() {
      this.apiservice.updateTodoById(this.data.todo.id, this.createParams).subscribe(response => {
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
      this.setTodoParams(this.form.value);
      if(this.data.todo) {
        this.updateTodo();
      } else {
        this.createTodo();
      }
      this.dialogRef.close();
    }

    private setTodoParams(value: any) {
      this.createParams.todo.title = value.title;
      this.createParams.todo.description = value.description;
      this.createParams.todo.due_date = value.due_date;
    }

}
