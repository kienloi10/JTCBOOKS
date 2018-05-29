import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
