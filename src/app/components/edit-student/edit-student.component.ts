import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  constructor(private StudentsService:StudentsService, private _ActivatedRoute:ActivatedRoute) {};
  editStudent = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl('')
  });
  message:boolean = false;
  ngOnInit():void {
    let std_Id = this._ActivatedRoute.snapshot.params['id'];
    this.StudentsService.getStudentByID(std_Id).subscribe((result:any) =>{
      console.log(result);
      this.editStudent = new FormGroup({
        name: new FormControl(result['name']),
        gender: new FormControl(result['gender']),
        email: new FormControl(result['email'])
      });
    });

  }
  updateData(){
    let std_Id = this._ActivatedRoute.snapshot.params['id'];
    let updatedData = this.editStudent.value;
    this.StudentsService.updateStudentData( std_Id, updatedData).subscribe((result) =>{
      console.log(result)
      // this.message = true;
      // this.editStudent.reset({});
    });
  }
}
