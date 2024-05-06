import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss']
})
export class TodoFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TodoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.backdropClick().subscribe(() => {
        this.dialogRef.close();
      });
    }

    form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      due_date: new FormControl(''),
    });

    onSubmit(): void {
      console.log(this.form.value);
    }

}
