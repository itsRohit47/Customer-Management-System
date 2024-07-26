import { Component, Input } from '@angular/core';
import { Customer } from '../../Models/customer.model';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { CustomerDetailsDialogComponent } from '../customer-details-dialog/customer-details-dialog.component';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';

@Component({
  selector: 'app-customer-item',
  standalone: true,
  imports: [],
  templateUrl: './customer-item.component.html',
})
export class CustomerItemComponent {
  @Input() customer: Customer | undefined;

  constructor(private dialog: MatDialog) {}

  // Open a delete dialog
  openDialog() {
    return this.dialog.open(PopupComponent, { data: this.customer?.id });
  }

  // Open a dialog to show customer details
  openDetails() {
    return this.dialog.open(CustomerDetailsDialogComponent, {
      data: this.customer?.id,
    });
  }

  // Open a dialog to edit customer details
  editCustomer() {
    return this.dialog.open(CustomerEditDialogComponent, {
      data: this.customer?.id,
    });
  }
}
