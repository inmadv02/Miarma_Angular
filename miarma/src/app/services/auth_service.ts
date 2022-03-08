import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../interfaces/login/loginDTO';
import { LoginResponse } from '../interfaces/login/login_response';
import { RegisterDTO } from '../interfaces/register/registerDTO';
import { RegisterResponse } from '../interfaces/register/register_response';

const URL = 'auth';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${URL}`;

  constructor(private http: HttpClient) { }

  register(registerDto: RegisterDTO): Observable<RegisterResponse> {
    let requestUrl = `${this.authBaseUrl}/register`;

    return this.http.post<RegisterResponse>(requestUrl, registerDto, DEFAULT_HEADERS);
  }

  login(loginDTO : LoginDTO): Observable<LoginResponse> {
    let requestUrl = `${this.authBaseUrl}/login`;
    return this.http.post<LoginResponse>(requestUrl, loginDTO, DEFAULT_HEADERS);
    
  }
}
