import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmeraldService {
  private baseUrl = 'http://localhost:8080/api/emerald/funds';

  constructor(private http: HttpClient) { }

  getFunds(){
    return this.http.get(`${this.baseUrl}/${1}`);
  }

  changeFunds(fund: number): Observable<Object>{
    return this.http.put(`${this.baseUrl}`, fund);
  }
  
}
