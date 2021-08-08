import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-mnie',
  templateUrl: './o-mnie.component.html',
  styleUrls: ['./o-mnie.component.css']
})
export class OMnieComponent implements OnInit {
  mojeZdjecie =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/67430015_10206434542380050_2876049331356434432_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=174925&_nc_ohc=W-DGRGzEPvkAX_f_rfZ&_nc_oc=AQl9iOgeVHiigDNMj8seVwWDFALtTRpL9Et9N_eYaRkj-LPrAHpq8g4APKWozzCFXTeecXKIU_o7KaqjijP7_ixe&_nc_ht=scontent-waw1-1.xx&oh=3043ee01c32195e8c14a8ce54429a9a3&oe=6134EED2';

  constructor() {}

  ngOnInit(): void {}
}
