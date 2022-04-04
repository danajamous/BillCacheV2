import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';

export interface PaymentMethodElement {
  nickname: string;
  accountnumber: string;
  action: string;
}

//database records
const ELEMENT_DATA: PaymentMethodElement[] = [
  {nickname:'Savings, Chase Bank', accountnumber: '******6690', action: ''},
  {nickname:'Checking, BOA', accountnumber: '******6543', action: ''},
];

@Component({
  selector: 'app-savedpaymentmethods',
  templateUrl: './savedpaymentmethods.component.html',
  styleUrls: ['./savedpaymentmethods.component.css']
})
export class SavedpaymentmethodsComponent implements AfterViewInit {

  displayedColumns: string[] = ['nickname', 'accountnumber', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
