import { Component, OnInit } from '@angular/core';
import { ADMIN_MENU_ITEMS } from './Admin-menu';

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuu = ADMIN_MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
