import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-makro',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaMakroComponent implements OnInit {
  title = 'Makro';
  zdjecia: Array<string> = [
    'https://mkfotografia.pl/img/hero.jpg',
    'https://mkfotografia.pl/img/hero.jpg',
    'https://mkfotografia.pl/img/hero.jpg'
  ];

  constructor() {}

  ngOnInit(): void {}
}
