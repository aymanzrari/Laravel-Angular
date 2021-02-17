import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from '../_models/employe';
import { TokenServiceService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{
  private url="http://localhost:8000/api/employes";
  
  constructor(
    private http: HttpClient,
    private tokenService: TokenServiceService  
  ) {
  }

  getHttpHeaders() {
    return new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.get()
    });
  }

  public findAll() {
    return this.http.get(this.url, {headers: this.getHttpHeaders()}); 
  }

  public findById(employeID: number) {
    return this.http.get(this.url + '/' + employeID, {headers: this.getHttpHeaders()});
  }

  public save(employee: Employe) {
    return this.http.post(this.url, employee, {headers: this.getHttpHeaders()});
  }

  public update(employee: Employe) {
    return this.http.put(this.url + '/' + employee.id, employee, {headers: this.getHttpHeaders()});
  }

  public delete(employID: number) {
    return this.http.delete(this.url + '/' + employID, {headers: this.getHttpHeaders()});
  }
}
