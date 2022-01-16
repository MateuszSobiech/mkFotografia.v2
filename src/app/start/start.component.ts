import { TextComponent } from './../text/text.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  makroRouter = '/g-makro';
  makroImg = '../../assets/img/macro/macro3-min.jpg';
  makroTitle = 'Macro';

  produktowaRouter = '/g-produktowa';
  produktowaImg = '../../assets/img/produktowa/produktowa4-min.jpg';
  produktowaTitle = 'Produktowa';

  sesjaRouter = '/g-sesja';
  sesjaImg = '../../assets/img/flower.jpg';
  sesjaTitle = 'Sesja';

  krajobrazyRouter = '/g-krajobrazy';
  krajobrazyImg = '../../assets/img/flower.jpg';
  krajobrazyTitle = 'Krajobrazy';

  ludzieRouter = '/g-ludzie';
  ludzieImg = '../../assets/img/flower.jpg';
  ludzieTitle = 'Ludzie';
}
