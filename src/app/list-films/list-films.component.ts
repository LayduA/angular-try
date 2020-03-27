import { Component, OnInit } from '@angular/core';
import { films } from '../films';
import { filminfos } from '../film-infos';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  film_list = films;
  film_searched = '';
  film_infos = filminfos;
  film_toshow = null;

  search(filmTitle : string){
    this.film_searched = filmTitle;
    this.show_info(filmTitle);
  }

  show_info(filmTitle : string){
    for(var i:number = 0; i < this.film_infos.length; i++){
      if(this.film_infos[i].title === filmTitle){
        this.film_toshow = this.film_infos[i]
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}