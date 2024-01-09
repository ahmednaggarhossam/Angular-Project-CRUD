import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url = 'http://localhost:3000/students'
  constructor(private http:HttpClient) {}
  getAllStudents(){
    return this.http.get(this.url);
  }

  saveStudentData(data:any){
    
    return this.http.post(this.url, data);
  }
  deleteStudentByID(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  getStudentByID(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  updateStudentData(id:any, data:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,data);
  }
}
