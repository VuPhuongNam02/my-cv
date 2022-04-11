import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = "http://localhost:3000/skills"

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private http: HttpClient
  ) { }

  getSkills(): Observable<any> {
    return this.http.get(url)
  }

  createSkill(data: any): Observable<any> {
    return this.http.post(url, data)
  }

  getSkillById(id: string | number): Observable<any> {
    return this.http.get(`${url}/${id}`)
  }

  updateSkill(id: string | number, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data)
  }

  deleteSkill(id: string | number): Observable<any> {
    return this.http.delete(`${url}/${id}`)
  }
}
