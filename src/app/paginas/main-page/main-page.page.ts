import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  ciudadBuscada: any;

  constructor() { }

  ngOnInit() {

  }

  onChangeCiudad = (event:any) => {
    console.log(event.target.value)
  }

}
