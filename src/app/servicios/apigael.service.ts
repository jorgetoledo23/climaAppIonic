import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApigaelService {
  constructor(public http: HttpClient) { }

  getAllEstaciones()
  {
    let url = 'https://api.gael.cloud/general/public/clima';
    return new Promise(resolve =>{
      this.http.get(url).subscribe(data => {
        resolve(data);
      },error=>{
        console.log(error);
      });
    })
  }

}
