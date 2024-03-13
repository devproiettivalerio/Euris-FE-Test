import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemDialogComponent } from './delete-item-dialog.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DeleteItemDialogComponent', () => {
  let component: DeleteItemDialogComponent;
  let fixture: ComponentFixture<DeleteItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteItemDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
