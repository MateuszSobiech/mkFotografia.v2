import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-sesja',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaSesjaComponent implements OnInit {
  title = 'Sesja';
  zdjecia: Array<string> = [
    'https://mkfotografia.pl/img/hero.jpg',
    'https://mkfotografia.pl/img/hero.jpg',
    'https://mkfotografia.pl/img/hero.jpg'
  ];

  constructor() {}

  ngOnInit(): void {}
}
