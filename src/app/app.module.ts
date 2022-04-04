import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavedBillsComponent } from './saved-bills/saved-bills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaynewbillComponent } from './paynewbill/paynewbill.component';
import { AccountsettingsComponent} from './account-settings/accountsettings.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { BillSummaryComponent } from './bill-summary/bill-summary.component';
import { SavedpaymentmethodsComponent } from './saved-payment-methods/savedpaymentmethods.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SavedBillsComponent,
    NavComponent,
    PaynewbillComponent,
    PaymenthistoryComponent,
    BillSummaryComponent,
    SavedpaymentmethodsComponent,
    PaymentConfirmationComponent,
    AccountsettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSortModule
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
