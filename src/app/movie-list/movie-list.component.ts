import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwa-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() {
    console.log('Objeto MovieList creado');
  }

  ngOnInit() {
    console.log('Inicializando componente');
  }

}
