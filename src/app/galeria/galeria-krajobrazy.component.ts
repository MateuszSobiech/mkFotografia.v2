import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-krajobrazy',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaKrajobrazyComponent implements OnInit {
  title = 'Krajobrazy';
  zdjecia: Array<string> = [
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
