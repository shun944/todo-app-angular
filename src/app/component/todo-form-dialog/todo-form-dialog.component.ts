import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetUserInfoService } from 'src/app/service/get-user-info.service';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss']
})
export class TodoFormDialogComponent {
  constructor(
    private getUserInfoService: GetUserInfoService,
    public dialogRef: MatDialogRef<TodoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.backdropClick().subscribe(() => {
        this.dialogRef.close();
      });
    }

    createParams = {
      "todo": {
        "title": "",
        "description": "",
        "due_date": "",
        "user_id": ""
      }
    };

    user_id = this.getUserInfoService.getUserId();

    form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      due_date: new FormControl(''),
    });

    onSubmit(): void {
      console.log(this.form.value);
    }

}
