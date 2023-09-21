import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiudadInfoPage } from './ciudad-info.page';

const routes: Routes = [
  {
    path: '',
    component: CiudadInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiudadInfoPageRoutingModule {}
