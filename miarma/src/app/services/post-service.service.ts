import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostDTO } from '../interfaces/post/postDTO';
import { PostResponse } from '../interfaces/post/post_response';

const API_BASE_URL = `${environment.apiBaseUrl}`;
const URL = 'posts';
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  constructor(private http : HttpClient) { }

  getPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${API_BASE_URL}/${URL}/all`, {headers: headers});
  }

  deletePosts(id : number) {
    return this.http.delete(`${API_BASE_URL}/${URL}/admin/${id}`, {headers: headers});
  }
}
