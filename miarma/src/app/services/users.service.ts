import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminUserResponse} from '../interfaces/users/userDTO';

const API_BASE_URL = `${environment.apiBaseUrl}`;
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getAdmins() : Observable<AdminUserResponse>{
    return this.http.get<AdminUserResponse>(`${API_BASE_URL}/users`, {headers: headers});
  }
}
