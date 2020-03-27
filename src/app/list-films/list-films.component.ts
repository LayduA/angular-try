import { Component, OnInit } from '@angular/core';
import { films } from '../films';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  film_list = films;
  film_searched = '';

  search(filmTitle : string){
    this.film_searched = filmTitle;
  }
  constructor() { }

  ngOnInit() {
  }

}