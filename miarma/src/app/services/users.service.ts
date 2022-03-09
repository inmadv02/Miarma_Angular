import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminUserResponse} from '../interfaces/users/userDTO';
import { AdminUser} from '../interfaces/users/userDTO';

let tk = localStorage.getItem('token');

const API_BASE_URL = `${environment.apiBaseUrl}`;
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${tk}`
  });

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getAdmins() : Observable<AdminUserResponse>{
    console.log(tk);
    return this.http.get<AdminUserResponse>(`${API_BASE_URL}/users`, {headers: headers});
  }

  createAdmins(id : string) : Observable<AdminUser> {
    return this.http.put<AdminUser>(`${API_BASE_URL}/be-admin/${id}`, {headers: headers});
  }
}
