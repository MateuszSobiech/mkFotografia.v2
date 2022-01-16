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

  krajobrazyRouter = '/g-krajobrazy';
  krajobrazyImg = '../../assets/img/krajobrazy/krajobrazy3-min.jpg';
  krajobrazyTitle = 'Krajobrazy';

  ludzieRouter = '/g-ludzie';
  ludzieImg = '../../assets/img/ludzie/ludzie6-min.jpg';
  ludzieTitle = 'Ludzie';
}
