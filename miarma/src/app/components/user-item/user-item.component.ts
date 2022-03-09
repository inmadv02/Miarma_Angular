import { Component, Input, OnInit } from '@angular/core';
import { AdminUser } from 'src/app/interfaces/users/userDTO';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userInput!: AdminUser;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }

  beAdmin(id : string){
    this.userService.createAdmins(id).subscribe(() => {location.reload()});
  }
}
