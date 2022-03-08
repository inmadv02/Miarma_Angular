import { Component, Input, OnInit } from '@angular/core';
import { AdminUser } from 'src/app/interfaces/users/userDTO';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userInput!: AdminUser;

  constructor() { }

  ngOnInit(): void {
  }

}
