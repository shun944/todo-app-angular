import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://127.0.0.1:3000"

  constructor(private http: HttpClient) { }

  getTodos(params?: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/todos`, { params });
  }

  createTodo(todo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/todos`, todo);
  }

}
