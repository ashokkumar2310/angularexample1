import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../model/application.model';

const baseUrl = 'http://localhost:8080/Admin/allApplication';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(baseUrl);
  }

  get(Application_Name: any): Observable<Application> {
    return this.http.get<Application>(`${baseUrl}/${Application_Name}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(Application_Name: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${Application_Name}`, data);
  }

  delete(Application_Name: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${Application_Name}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(Application_Name: any): Observable<Application[]> {
    return this.http.get<Application[]>(`${baseUrl}?Application_Name=${Application_Name}`);
  }
}