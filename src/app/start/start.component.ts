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
  makroImg = 'https://mkfotografia.pl/img/hero.jpg';
  makroTitle = 'Makro';

  produktowaRouter = '/g-produktowa';
  produktowaImg = 'https://mkfotografia.pl/img/hero.jpg';
  produktowaTitle = 'Produktowa';

  sesjaRouter = '/g-sesja';
  sesjaImg = 'https://mkfotografia.pl/img/hero.jpg';
  sesjaTitle = 'Sesja';
}
