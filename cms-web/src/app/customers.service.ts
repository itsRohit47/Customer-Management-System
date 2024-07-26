import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../Models/customer.model';
import { map, Observable } from 'rxjs';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private _snackBar: MatSnackBar) {
    // Subscribe to the customers observable and update the length property
    this.$customers.subscribe((customers) => {
      this.length = customers.length;
    });
  }

  // the api url
  apiUrl = 'http://localhost:8080/Customer';

  // Inject the HttpClient service
  http = inject(HttpClient);

  // Create an observable to store the list of customers
  $customers = this.getCustomers();

  // Create a property to store the length of the customers list
  length = 0;

  // Create a property to store the empty status of the customers list
  empty = false;

  // Retrieve the list of customers from the API
  getCustomers() {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  // Retrieve a specific customer by their ID from the API
  getCustomerbyId(id: number) {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  // Add a new customer to the API
  addCustomer(customer: Customer) {
    return this.http.post<Customer>(this.apiUrl, customer).subscribe({
      next: (response) => {
        this.length++;
        this.customerAddedAlert();
        this.$customers = this.getCustomers();
      },
      error: (error) => {
        this.errorAlert(error.error.message);
      },
    });
  }

  // Update the details of an existing customer in the API
  updateCustomer(customer: Customer) {
    return this.http
      .put<Customer>(`${this.apiUrl}/${customer.id}`, customer)
      .subscribe({
        next: (response) => {
          this.customerUpdatedAlert();
          this.$customers = this.getCustomers();
        },
        error: (error) => {
          this.errorAlert(error.error.message);
        },
      });
  }

  // Delete a customer from the API
  deleteCustomer(id: number) {
    return this.http.delete<Customer>(`${this.apiUrl}/${id}`).subscribe({
      next: (response) => {
        this.length--;
        this.customerDeletedAlert();
        this.$customers = this.getCustomers();
      },
    });
  }

  // Show a snackbar notification for a successful customer addition
  customerAddedAlert() {
    this._snackBar.open('Customer added 🥳', 'Close', {
      duration: 3000,
    });
  }

  // Show a snackbar notification for a successful customer deletion
  customerDeletedAlert() {
    this._snackBar.open('Customer deleted 🎉', 'Close', {
      duration: 3000,
    });
  }

  // Show a snackbar notification for successful customer details update
  customerUpdatedAlert() {
    this._snackBar.open('Customer details Updated 🎉', 'Close', {
      duration: 3000,
    });
  }

  // Show a snackbar notification for an error
  errorAlert(error: string) {
    this._snackBar.open(`${error} ❌`, 'Close', {
      duration: 3000,
    });
  }
}
