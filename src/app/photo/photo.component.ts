import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  routerUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    this.routerUrl = 'http://localhost:4200' + this.router;
  }

  @Input()
  router = '';

  @Input()
  imgUrl = '';

  @Input()
  title = '';
}
