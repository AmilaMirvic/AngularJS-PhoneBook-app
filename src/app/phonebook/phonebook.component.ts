import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {
  phonebook: Array<object>;
  contact: { name: string, phone: string };
  name: string;
  phone: string;

  constructor() {
    this.phonebook = [];
  }

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  saveContact() {
    this.phonebook.push({ name: this.name, phone: this.phone });
    this.saveToLocalStorage();
    this.phone = "";
    this.name = "";
  };

  saveToLocalStorage() {
    localStorage.setItem('phonebook', JSON.stringify(this.phonebook));
  }

  loadFromLocalStorage() {
    this.phonebook = JSON.parse(localStorage.getItem("phonebook")) || [];
  }

  deleteFromLocalStorage(ev) {
    let index = this.phonebook.indexOf(ev)
    this.phonebook.splice(index, 1);
    this.saveToLocalStorage()
    this.loadFromLocalStorage();
  }


}
