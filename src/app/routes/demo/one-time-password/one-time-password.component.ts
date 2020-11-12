import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-one-time-password',
  templateUrl: './one-time-password.component.html',
  styleUrls: ['./one-time-password.component.scss'],
})
export class OneTimePasswordComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '33%',
    });
  }
}
