import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'Home' , component:HomeComponent},
  {path:'Add' , component:AddStudentsComponent},
  {path:'Edit' , component:EditStudentComponent},
  {path:'Edit/:id' , component:EditStudentComponent},
  {path:'List' , component:ListStudentComponent},
  {path:'Login' , component:LoginStudentComponent},
  {path:'Registration' , component:RegistrationStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
