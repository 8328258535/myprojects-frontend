import { Component, OnInit } from '@angular/core';
import Book from 'src/app/Entity/Books';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title = "Fill out the book details"//one way binding

 
  book:Book = new Book();

  save(){
    const observable = this.bookservice.saveBook(this.book);
    observable.subscribe(
      (response:any) => {
        console.log(response); 
      },function(error){
        console.log(error);
        alert("something went wrong please try after some time")
      }
    )

  // console.log(this.book);
}

  constructor(private bookservice:BooksService) { }

  ngOnInit(): void {
  }

}
