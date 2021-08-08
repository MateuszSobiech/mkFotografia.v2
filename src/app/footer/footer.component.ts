import {
  faTwitter,
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
