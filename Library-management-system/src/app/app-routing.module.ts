import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { AllBooksComponent } from './Components/all-books/all-books.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"Addbook",component:AddbookComponent},{path:"Allbooks",component:AllBooksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
