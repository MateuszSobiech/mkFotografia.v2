import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-produktowa',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaProduktowaComponent implements OnInit {
  title = 'Produktowa';
  zdjecia: Array<string> = [
    '../../assets/img/produktowa/produktowa1-min.jpg',
    '../../assets/img/produktowa/produktowa2-min.jpg',
    '../../assets/img/produktowa/produktowa3-min.jpg',
    '../../assets/img/produktowa/produktowa4-min.jpg',
    '../../assets/img/produktowa/produktowa5-min.jpg',
    '../../assets/img/produktowa/produktowa6-min.jpg',
    '../../assets/img/produktowa/produktowa7-min.jpg',
    '../../assets/img/produktowa/produktowa8-min.jpg',
    '../../assets/img/produktowa/produktowa9-min.jpg',
    '../../assets/img/produktowa/produktowa10-min.jpg',
    '../../assets/img/produktowa/produktowa11-min.jpg',
  ];

  constructor() {}

  ngOnInit(): void {
    this.zdjecia.reverse();
  }
}
