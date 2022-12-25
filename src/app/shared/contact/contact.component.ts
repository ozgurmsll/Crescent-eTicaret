import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  products:any;
  constructor(private http: HttpClient,) {}
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get('http://139.59.156.77/test.json').subscribe(data => {
      this.products = data;
    });
  }

}
