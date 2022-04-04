
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PaymentElement {
  billdate: string;
  billername: string;
  servicename: string;
  billingnumber: string;
  status: string;
}

const ELEMENT_DATA: PaymentElement[] = [
  {billdate:'01-20-22', billername: 'T-mobile', servicename: 'Prepaid', billingnumber: '13023', status :'Success'},
   {billdate:'12-10-21', billername: 'DMV Virginia', servicename: 'Car Title', billingnumber: '111023', status :'Success'},
  {billdate:'11-21-21', billername: 'Florist Shop', servicename: 'Gift', billingnumber: 'VA-13023', status :'Success'},
  {billdate:'04-20-21', billername: 'Florist Shop', servicename: 'Gift', billingnumber: 'VA-13023', status :'Fail'},
];

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['billdate', 'billername', 'servicename', 'billingnumber','status'];
   dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
