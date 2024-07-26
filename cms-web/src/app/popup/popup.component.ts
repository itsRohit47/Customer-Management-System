import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { CustomersService } from '../customers.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  // Inject the CustomersService
  functions = inject(CustomersService);

  constructor(private ref: MatDialogRef<PopupComponent>) {}

  // Inject the data received from the dialog
  readonly data = inject<number>(MAT_DIALOG_DATA);

  // Close the popup dialog
  closePopup() {
    this.ref.close();
  }

  // Delete the customer and close the popup dialog
  onDelete() {
    this.functions.deleteCustomer(this.data);
    this.closePopup();
  }
}
