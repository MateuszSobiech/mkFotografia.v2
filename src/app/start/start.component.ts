import { TextComponent } from './../text/text.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  txt: string = '';
  constructor() {}

  ngOnInit(): void {
    const lan = localStorage.getItem('lan');
    if (lan === 'pl') {
      this.txt = TextComponent.pl_wstep;
    } else {
      this.txt = TextComponent.en_wstep;
    }
  }

  makroRouter = '/g-makro';
  makroImg = '../../assets/img/flower.jpg';
  makroTitle = 'Macro';

  produktowaRouter = '/g-produktowa';
  produktowaImg = '../../assets/img/flower.jpg';
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

  add() {
    localStorage.setItem('lan', 'pl');
    location.reload();
  }

  show() {
    localStorage.setItem('lan', 'en');
    location.reload();
  }
}
