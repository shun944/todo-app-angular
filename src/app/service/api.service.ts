import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://127.0.0.1:3000"

  todoCreated = new Subject<void>();

  constructor(private http: HttpClient) { }

  getTodos(params?: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/todos`, { params });
  }

  createTodo(todo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/todos`, todo).pipe(
      tap(() => {
        this.todoCreated.next();
      })
    );
  }

}
