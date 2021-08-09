import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-produktowa',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaProduktowaComponent implements OnInit {
  title = 'Produktowa';
  zdjecia: Array<string> = [
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg'
  ];

  constructor() {}

  ngOnInit(): void {}
}
