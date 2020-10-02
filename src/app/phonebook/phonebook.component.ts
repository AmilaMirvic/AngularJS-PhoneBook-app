import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {
  phonebook: Array<object>;
  contact: {name:string, phone: string};

  constructor() {
    this.phonebook = [];
   }

  ngOnInit() {
  }



}
