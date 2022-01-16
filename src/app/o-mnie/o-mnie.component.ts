import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-mnie',
  templateUrl: './o-mnie.component.html',
  styleUrls: ['./o-mnie.component.css'],
})
export class OMnieComponent implements OnInit {
  mojeZdjecie = '../../assets/img/omnie.jpg';

  constructor() {}

  ngOnInit(): void {}
}
