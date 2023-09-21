import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiudadInfoPageRoutingModule } from './ciudad-info-routing.module';

import { CiudadInfoPage } from './ciudad-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiudadInfoPageRoutingModule
  ],
  declarations: [CiudadInfoPage]
})
export class CiudadInfoPageModule {}
