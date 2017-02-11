import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [ MdSnackBar ]
})
export class DataComponent implements OnInit {

  data: Array<number> = [];

  constructor(
    private dataService: DataService,
    private snackBar: MdSnackBar
  ) {}

  // First part of Angular 2 component lifecycle: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit() {
    this.fetchData();
  }

  showToast(): void {
    this.snackBar.open("Well hello", "close");
  }

  fetchData() {
    this.dataService.getData().subscribe(
      data => this.data = data,
      error => console.log("Error fetching data: ", error)
    )
  }
}
