import { Component } from '@angular/core';
import * as moment from 'moment/moment';
import { Author } from '../models/author';
import { AUTHORS } from '../models/test';

const AUTHORSLIST: Author[] = [
  { age: 11, name: 'Mr. Nice', email: '' },
  { age: 12, name: 'Narco', email: '' },
  { age: 13, name: 'Bombasto', email: '' },
  { age: 14, name: 'Celeritas', email: '' },
  { age: 15, name: 'Magneta', email: '' },
  { age: 16, name: 'RubberMan', email: '' },
  { age: 17, name: 'Dynama', email: '' },
  { age: 18, name: 'Dr IQ', email: '' },
  { age: 19, name: 'Magma', email: '' },
  { age: 20, name: 'Tornado', email: '' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App';
  copyright = moment().format('DD/MM/YYYY');
  author: Author;
  authorList : Author[];
  
  constructor() {
    this.author = new Author();
    /*this.author.name = 'Coumarane COUPPANE';
    this.author.age = 42;
    this.author.email = 'c.coumarane@gmail.com';*/
    this.authorList = AUTHORSLIST;
  }

  showAuthorInfo(author: Author) {
    this.author = author;
  }
}





