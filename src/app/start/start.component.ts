import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  makroRouter = '/g-makro';
  makroImg = '../../assets/img/flower.jpg';
  makroTitle = 'Makro';

  produktowaRouter = '/g-produktowa';
  produktowaImg = '../../assets/img/flower.jpg';
  produktowaTitle = 'Produktowa';

  sesjaRouter = '/g-sesja';
  sesjaImg = '../../assets/img/flower.jpg';
  sesjaTitle = 'Sesja';
}
