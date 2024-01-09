import { Component } from '@angular/core';
import { StudentsService } from "../../students.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  studentData:any =[];
  constructor(private _student:StudentsService){}
  ngOnInit():void{
    this._student.getAllStudents().subscribe((allData) => {
      console.log(allData);
      this.studentData = allData;
    });
  
  }

  deleteStudent(student_id:any){
    this._student.deleteStudentByID(student_id).subscribe((response:any) =>{
      this.ngOnInit();
    });
  }

  editStudent(){
    console.log('hello')
  }

}
