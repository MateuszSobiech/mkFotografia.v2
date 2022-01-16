import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-ludzie',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaLudzieComponent implements OnInit {
  title = 'Ludzie';
  zdjecia: Array<string> = [
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
