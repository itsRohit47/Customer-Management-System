import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomersService } from '../customers.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';
import { Customer } from '../../Models/customer.model';

// The component for the customer details dialog.
@Component({
  selector: 'app-customer-details-dialog',
  standalone: true,
  imports: [],
  templateUrl: './customer-details-dialog.component.html',
})
export class CustomerDetailsDialogComponent {
  constructor(
    private ref: MatDialogRef<CustomerDetailsDialogComponent>,
    private dialog: MatDialog
  ) {}

  // Inject the dialog data
  data = inject<number>(MAT_DIALOG_DATA);

  // Inject the CustomersService
  functions = inject(CustomersService);

  // The first name of the customer.
  fname = '';

  // The last name of the customer.
  lname = '';

  // The email of the customer.
  email = '';

  // The phone number of the customer.
  phone = '';

  // Fetch the customer data by ID
  ngOnInit() {
    this.functions
      .getCustomerbyId(this.data)
      .subscribe((customer: Customer) => {
        this.fname = customer.firstName;
        this.lname = customer.lastName;
        this.email = customer.email;
        this.phone = customer.phone;
      });
  }

  // Close the dialog
  closePopup() {
    this.ref.close();
  }

  // Open a dialog to confirm the deletion of the customer
  deleteCustomer() {
    this.dialog.open(PopupComponent, { data: this.data });
    this.ref.close();
  }

  // Open a dialog to edit the customer details
  updateCustomer() {
    this.dialog.open(CustomerEditDialogComponent, { data: this.data });
    this.ref.close();
  }
}
