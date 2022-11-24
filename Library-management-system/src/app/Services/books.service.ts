import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:5000/books"



@Injectable({
  providedIn: 'root'
})
export class BooksService {
  saveBook(book:{
    bookname:String;
    bookgenere:String;
    author:String;
    price:number;
    availability:String;
    
  }){
    return this.http.post(BASE_URL,book)
    
  }
  getBooks(){
    return this.http.get(BASE_URL)
  }
  deleteBook(book:any){
    return this.http.delete(BASE_URL+"/"+book.id)
  }


  constructor(public http:HttpClient) { }
}
