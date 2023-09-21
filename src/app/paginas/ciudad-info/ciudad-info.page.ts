import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApigaelService } from 'src/app/servicios/apigael.service';

@Component({
  selector: 'app-ciudad-info',
  templateUrl: './ciudad-info.page.html',
  styleUrls: ['./ciudad-info.page.scss'],
})

export class CiudadInfoPage implements OnInit {

  ciudad:any;
  estaciones:any;
  ciudadEncontrada?:Ciudad;
  encontrada:boolean = false;
  fecha:String = new Date().toLocaleDateString();


  constructor(private activatedRoute: ActivatedRoute,
    private proveedorAPI: ApigaelService) { }

    sleep = (ms:any) => new Promise(r => setTimeout(r, ms));

    getEstaciones(){
      this.proveedorAPI.getAllEstaciones()
        .then(data => {
          this.estaciones = data;
          console.log(this.estaciones);
          this.verificarCiudad()
        })
    }

  ngOnInit() {
    this.ciudad = this.activatedRoute.snapshot.paramMap.get('ciudad');
    this.getEstaciones()
  }

  verificarCiudad = () => {
    this.estaciones.forEach((est:Ciudad) => {
      if(est.Estacion?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') == this.ciudad.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')
      || est.Estacion?.toLowerCase().includes(this.ciudad.toLowerCase())){
        this.ciudadEncontrada = est
        this.encontrada = true
        console.log(this.ciudadEncontrada)
      }
    });
  }
  removeAccents = (str?:string) => {
    return str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 


}

type Ciudad = {
  Codigo?: string;
  Estacion?: string;
  HoraUpdate?: string;
  Temp?: string;
  Humedad?: string;
  Estado?: string;
  Icono?: string;
}
