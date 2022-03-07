import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/interfaces/login/loginDTO';
import { AuthService } from 'src/app/services/auth_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  login = new LoginDTO;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  submitt() {
    this.authService.login(this.login);
    this.router.navigate(['/home']);
  }

}
