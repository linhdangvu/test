import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: any;

  constructor() { }

  ngOnInit() {
    fetch('assets/data/data.json').then(res => res.json())
        .then(json => {
          this.data = json;
        });
  }



}
