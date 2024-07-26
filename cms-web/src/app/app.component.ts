import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { CustomersService } from './customers.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { Customer } from '../Models/customer.model';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    CustomerItemComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'cms-web';

  functions = inject(CustomersService);

  constructor(public dialog: MatDialog) {}

  searchText = '';

  onSearchChange() {
    if (this.searchText == '') {
      this.functions.$customers = this.functions.getCustomers();
      this.functions.empty = false;
    } else {
      const searchTerm = this.searchText.toLowerCase();
      this.functions.$customers = this.functions.$customers.pipe(
        map((customers: Customer[]) => {
          return customers.filter((customer) => {
            return (
              customer.firstName.toLowerCase().includes(searchTerm) ||
              customer.lastName.toLowerCase().includes(searchTerm) ||
              customer.email.toLowerCase().includes(searchTerm) ||
              customer.phone.toLowerCase().includes(searchTerm)
            );
          });
        }),
        tap((customers: Customer[]) => {
          if (customers.length == 0) {
            this.functions.empty = true;
          } else {
            this.functions.empty = false;
          }
        })
      );
    }
  }

  openForm() {
    var _add = this.dialog.open(AddCustomerDialogComponent, {});
  }
}
