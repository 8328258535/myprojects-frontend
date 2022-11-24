import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisteredStudentsComponent } from './registered-students/registered-students.component';
import { StudentRegComponent } from './student-reg/student-reg.component';

const routes: Routes = [{path:"",component:HomeComponent}
,{path:"register",component:StudentRegComponent},
{path:"registered",component:RegisteredStudentsComponent},
{path:"About",component:AboutComponent},
{path:"pipe",component:PipeDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
