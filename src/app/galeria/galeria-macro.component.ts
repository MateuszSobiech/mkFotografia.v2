import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-makro',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaMacroComponent implements OnInit {
  title = 'Macro';
  zdjecia: Array<string> = [
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg',
    '../../assets/img/flower.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
