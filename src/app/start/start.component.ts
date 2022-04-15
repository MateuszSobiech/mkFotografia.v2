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
  makroImg = '../../assets/img/kwadrat.jpg';
  makroTitle = 'Macro';
  makroDescription =
    '- uwielbiam odkrywać nowe oblicza natury. Uchwycić tę grę naturalnego światła. Te drobne szczegóły, które można dostrzec tylko przez wizjer aparatu. Gra kolorów, różnorodna struktura powierzchni kwiatów, traw, drzew, to pociąga za sobą.';

  produktowaRouter = '/g-produktowa';
  // produktowaImg = '../../assets/img/produktowa/produktowa4-min.jpg';
  produktowaImg = '../../assets/img/kwadrat.jpg';
  produktowaTitle = 'Produktowa';
  produktowaDescription =
    '- wciąga mnie sam proces tworzenia, zabawa elementami sesji, gra światłem, wolę bardziej tworzyć w świetle zastanym, ale jednak wiele możliwości daje pełna kontrola nad oświetleniem. Najbardziej lubię dodać magię zwykłemu przedmiotowi. Zależy mi by pokazać.';

  krajobrazyRouter = '/g-krajobrazy';
  // krajobrazyImg = '../../assets/img/krajobrazy/krajobrazy3-min.jpg';
  krajobrazyImg = '../../assets/img/kwadrat.jpg';
  krajobrazyTitle = 'Krajobrazy';
  krajobrazyDescription =
    '- plecak, aparat, statyw i w drogę. Zawsze coś się trafi nowego, oby tylko światło sprzyjało. Te momenty idealnego ułożenie się chmur, gałezi… gdy dociera się na miejsce to trzeba dostrzec to czego inni nie widzą. Otworzyć oczy swojej duszy. A jeśli w mokrych butach skończę spacer, nic to, było warto';

  ludzieRouter = '/g-ludzie';
  // ludzieImg = '../../assets/img/ludzie/ludzie6-min.jpg';
  ludzieImg = '../../assets/img/kwadrat.jpg';
  ludzieTitle = 'Ludzie';
  ludzieDescription =
    '- nie lubię portretów studyjnych, choć i takie robię. Lubię ludzi w ich naturalnym środowisku, gdy zdjęcia uchwycą osobowość, charakterystyczne zachowanie. W czasie sesji można nawiązać relację, która prowadzi do otworzenia się osoby i stworzenia prawdziwych zdjęć. ';
}
