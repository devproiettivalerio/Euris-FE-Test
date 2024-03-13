import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../../../shared/shared.module';

interface DeleteItemDialogData {

  title:string;

  id:string;

}

@Component({
  selector: 'app-delete-item-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './delete-item-dialog.component.html',
  styleUrl: './delete-item-dialog.component.scss',
})
export class DeleteItemDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DeleteItemDialogData,
    public dialogRef: MatDialogRef<DeleteItemDialogComponent>
  ) {}

  OnConfirm(event: any) {
    this.dialogRef.close('ok');
  }
  OnCancel(event: any) {
    this.dialogRef.close('ko');
  }
}
