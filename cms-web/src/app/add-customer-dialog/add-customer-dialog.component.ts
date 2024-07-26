import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomersService } from '../customers.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-customer-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-customer-dialog.component.html',
})
export class AddCustomerDialogComponent {
  constructor(private ref: MatDialogRef<AddCustomerDialogComponent>) {}

  functions = inject(CustomersService);

  // Define the form controls and validators
  contactForm = new FormGroup({
    firstName: new FormControl<string>('', Validators.required), // First name control
    lastName: new FormControl<string>('', Validators.required), // Last name control
    email: new FormControl<string>('', Validators.email), // Email control
    phone: new FormControl<string>(''), // Phone control
  });

  // Getters for accessing the form controls
  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  // Close the dialog
  closeDialog() {
    this.ref.close();
  }

  // Add a new customer
  addCustomer() {
    const customerReq = {
      id: 0,
      firstName: this.contactForm.value.firstName || '',
      lastName: this.contactForm.value.lastName || '',
      email: this.contactForm.value.email || '',
      phone: this.contactForm.value.phone || '',
    };

    this.functions.addCustomer(customerReq);
    this.closeDialog();
  }
}
