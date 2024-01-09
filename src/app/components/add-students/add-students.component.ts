import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { StudentsService } from "../../students.service";

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  constructor(private StudentsService:StudentsService) {};
  addStudent = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl('')
  });
  message:boolean = false;
  ngOnInit():void {
  
  }
  saveData(){
    let dataa = this.addStudent.value;
    this.StudentsService.saveStudentData(dataa).subscribe(() =>{
      this.message = true;
      this.addStudent.reset({});
    });
  }
}
