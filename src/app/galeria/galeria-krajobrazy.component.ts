import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-krajobrazy',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaKrajobrazyComponent implements OnInit {
  title = 'Krajobrazy';
  zdjecia: Array<string> = [
    '../../assets/img/krajobrazy/krajobrazy1-min.jpg',
    '../../assets/img/krajobrazy/krajobrazy2-min.jpg',
    '../../assets/img/krajobrazy/krajobrazy3-min.jpg',
    '../../assets/img/krajobrazy/krajobrazy4-min.jpg',
    '../../assets/img/krajobrazy/krajobrazy5-min.jpg',
    '../../assets/img/krajobrazy/krajobrazy6-min.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
