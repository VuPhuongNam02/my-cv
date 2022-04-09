import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:3000/profile"

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Observable<any> {
    return this.http.get(url)
  }

  updateProfile(obj: any): Observable<any> {
    return this.http.put(url, obj)
  }
}
