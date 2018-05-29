import { IBook } from './../models/IBook';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BookService {
  private _book: BehaviorSubject<Array<IBook>> = new BehaviorSubject(new Array());
  get books() {
    return this._book.asObservable();
  }
  constructor() { }
  getBooks() {
    return this._book.next(this.getBookFromServer());
  }
  private getBookFromServer() {
    return [
      { cover: '../assets/asset-0.png', title: 'Xây dựng RESTful API với Nodejs', linkDL: 'laptrinhvien.io' },
      { cover: '../assets/asset-1.png', title: 'Giáo trình Front-End cơ bản', linkDL: 'laptrinhvien.io' },
      { cover: '../assets/asset-2.png', title: 'Lập trình C++', linkDL: 'laptrinhvien.io' },
      { cover: '../assets/asset-3.png', title: 'Angular cơ bản', linkDL: 'laptrinhvien.io' },
      { cover: '../assets/asset-4.png', title: 'Xây dựng RESTful API với Nodejs', linkDL: 'laptrinhvien.io' },
      { cover: '../assets/asset-5.png', title: 'mongoDB', linkDL: '' }
    ];
  }
  searchBook (keyword: string) {
    const books = this.getBookFromServer().filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
    this._book.next(books);
  }

}