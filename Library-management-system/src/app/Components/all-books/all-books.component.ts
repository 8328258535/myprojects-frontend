import { Component, OnInit } from '@angular/core';
import Book from 'src/app/Entity/Books';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  deleteRow(book:any,index:number){
    const observable = this.bookService.deleteBook(book);
    observable.subscribe((response:any) =>{
      console.log(response);
      this.books.splice(index,1)
    })

  }
  sort(){
    this.books.sort(function(book1,book2){
      return book1.price-book2.price
    })
  }
  

  books : Book[]=[];

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    const promise = this.bookService.getBooks();
    promise.subscribe((response) =>{
      console.log(response);
      this.books = response as Book[];
    })


  }

}
