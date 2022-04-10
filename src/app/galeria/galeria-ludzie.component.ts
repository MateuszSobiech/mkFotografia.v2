import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-ludzie',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaLudzieComponent implements OnInit {
  title = 'Ludzie';
  zdjecia: Array<string> = [
    '../../assets/img/ludzie/ludzie1-min.jpg',
    '../../assets/img/ludzie/ludzie2-min.jpg',
    '../../assets/img/ludzie/ludzie3-min.jpg',
    '../../assets/img/ludzie/ludzie4-min.jpg',
    '../../assets/img/ludzie/ludzie5-min.jpg',
    '../../assets/img/ludzie/ludzie6-min.jpg',
    '../../assets/img/ludzie/ludzie7-min.jpg',
  ];

  constructor() {}

  ngOnInit(): void {
    this.zdjecia.reverse();
  }
}
