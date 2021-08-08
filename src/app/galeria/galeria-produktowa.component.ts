import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-produktowa',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaProduktowaComponent implements OnInit {
  title = 'Produktowa';
  zdjecia: Array<string> = [
    'https://mkfotografia.pl/img/hero.jpg',
    'https://mkfotografia.pl/img/hero.jpg',
    'https://mkfotografia.pl/img/hero.jpg'
  ];

  constructor() {}

  ngOnInit(): void {}
}
