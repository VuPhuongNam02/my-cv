import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = "http://localhost:3000/projects"

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<any> {
    return this.http.get(url)
  }

  createProject(data: any): Observable<any> {
    return this.http.post(url, data)
  }

  getProjectById(id: string | number): Observable<any> {
    return this.http.get(`${url}/${id}`)
  }

  updateProject(id: string | number, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data)
  }

  deleteProject(id: string | number): Observable<any> {
    return this.http.delete(`${url}/${id}`)
  }
}
