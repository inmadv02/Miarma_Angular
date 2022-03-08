import { Component, OnInit } from '@angular/core';
import { AdminUser } from 'src/app/interfaces/users/userDTO';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {

  users: AdminUser[] = [];

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(){
    this.usersService.getAdmins().subscribe(results => {
      this.users = results.content;
    });
  }

}
