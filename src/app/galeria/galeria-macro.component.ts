import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-makro',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaMacroComponent implements OnInit {
  title = 'Macro';
  zdjecia: Array<string> = [
    '../../assets/img/macro/macro1-min.jpg',
    '../../assets/img/macro/macro2-min.jpg',
    '../../assets/img/macro/macro3-min.jpg',
    '../../assets/img/macro/macro4-min.jpg',
    '../../assets/img/macro/macro5-min.jpg',
    '../../assets/img/macro/macro6-min.jpg',
    '../../assets/img/macro/macro7-min.jpg',
    '../../assets/img/macro/macro8-min.jpg',
    '../../assets/img/macro/macro9-min.jpg',
    '../../assets/img/macro/macro10-min.jpg',
    '../../assets/img/macro/macro11-min.jpg',
    '../../assets/img/macro/macro12-min.jpg',
    '../../assets/img/macro/macro13-min.jpg',
    '../../assets/img/macro/macro14-min.jpg',
    '../../assets/img/macro/macro15-min.jpg',
    '../../assets/img/macro/macro16-min.jpg',
    '../../assets/img/macro/macro17-min.jpg',
  ];

  constructor() {}

  ngOnInit(): void {
    this.zdjecia.reverse();
  }
}
