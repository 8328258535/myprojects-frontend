import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegComponent } from './student-reg/student-reg.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisteredStudentsComponent } from './registered-students/registered-students.component';
import { AboutComponent } from './about/about.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { EllippsisPipe } from './Pipes/ellippsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegComponent,
    HomeComponent,
    NavbarComponent,
    RegisteredStudentsComponent,
    AboutComponent,
    PipeDemoComponent,
    EllippsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
