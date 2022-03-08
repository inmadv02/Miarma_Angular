import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/interfaces/login/loginDTO';
import { LoginResponse } from 'src/app/interfaces/login/login_response';
import { AuthService } from 'src/app/services/auth_service';
import { environment } from 'src/environments/environment';

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
    this.authService.login(this.login).subscribe(loginResponse => {
      localStorage.setItem('token', loginResponse.token);
    });
   
    this.router.navigate(['/home']);
  }

}
