import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emerald } from './emerald';

@Injectable({
  providedIn: 'root'
})
export class EmeraldService {
  private baseUrl = 'http://localhost:8080/api/emerald/funds';

  constructor(private http: HttpClient) { }

  getFunds(): Promise<any>{
    return this.http.get(`${this.baseUrl}`).toPromise();
  }

  changeFunds(id: number, value: any): Observable<Object>{
    return this.http.put('http://localhost:8080/api/emerald/1', value);
  }
  
}


