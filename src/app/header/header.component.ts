import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchBook: string;
  constructor(private _bookService: BookService) { }

  ngOnInit() {
  }
  search(kw) {
    this._bookService.searchBook(kw);
  }
}
