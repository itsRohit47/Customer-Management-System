import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomersService } from '../customers.service';
import { CommonModule } from '@angular/common';
import { Customer } from '../../Models/customer.model';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-customer-edit-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-edit-dialog.component.html',
})
export class CustomerEditDialogComponent {
  constructor(private ref: MatDialogRef<CustomerEditDialogComponent>) {}

  // Create a form group for the edit form
  editForm = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.email),
    phone: new FormControl<string>(''),
  });

  // Inject the dialog data
  data = inject<number>(MAT_DIALOG_DATA);

  // Inject the CustomersService
  functions = inject(CustomersService);

  // Getters for form controls
  get firstName() {
    return this.editForm.get('firstName');
  }

  // Getters for form controls
  get lastName() {
    return this.editForm.get('lastName');
  }

  // Getters for form controls
  get email() {
    return this.editForm.get('email');
  }

  // Variables to store current customer data
  currentFirstName = '';
  currentLastName = '';
  currentEmail = '';
  currentPhone = '';
  currentId = 0;

  ngOnInit() {
    // Fetch the customer data by ID
    this.functions
      .getCustomerbyId(this.data)
      .subscribe((customer: Customer) => {
        // Update the current customer data
        this.currentFirstName = customer.firstName;
        this.currentLastName = customer.lastName;
        this.currentEmail = customer.email;
        this.currentPhone = customer.phone;
        this.currentId = customer.id;
      });
  }

  // Close the dialog popup
  closePopup() {
    this.ref.close();
  }

  // Flag to indicate if it's an update operation
  isUpdate: boolean = false;

  // Handle form submission
  onFormSubmit() {
    // Create a customer request object
    const customerReq = {
      id: this.currentId,
      firstName: this.editForm.value.firstName || this.currentFirstName,
      lastName: this.editForm.value.lastName || this.currentLastName,
      email: this.editForm.value.email || this.currentEmail,
      phone: this.editForm.value.phone || this.currentPhone,
    };

    // Update the customer
    this.functions.updateCustomer(customerReq);

    // Close the dialog popup
    this.closePopup();
  }
}
