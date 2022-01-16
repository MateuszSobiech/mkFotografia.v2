import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-produktowa',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaProduktowaComponent implements OnInit {
  title = 'Produktowa';
  zdjecia: Array<string> = [
    '../../assets/img/produktowa/produktowa1.jpg',
    '../../assets/img/produktowa/produktowa2.jpg',
    '../../assets/img/produktowa/produktowa3.jpg',
    '../../assets/img/produktowa/produktowa4.jpg',
    '../../assets/img/produktowa/produktowa5.jpg',
    '../../assets/img/produktowa/produktowa6.jpg',
    '../../assets/img/produktowa/produktowa7.jpg',
    '../../assets/img/produktowa/produktowa8.jpg',
    '../../assets/img/produktowa/produktowa9.jpg',
    '../../assets/img/produktowa/produktowa10.jpg',
    '../../assets/img/produktowa/produktowa11.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
