import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = "http://localhost:3000/schools"

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(
    private http: HttpClient
  ) { }

  getSchools(): Observable<any> {
    return this.http.get(url)
  }

  createSchool(data: any): Observable<any> {
    return this.http.post(url, data)
  }

  getSchoolById(id: string | number): Observable<any> {
    return this.http.get(`${url}/${id}`)
  }

  updateSchool(id: string | number, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data)
  }

  deleteSchool(id: string | number): Observable<any> {
    return this.http.delete(`${url}/${id}`)
  }
}
