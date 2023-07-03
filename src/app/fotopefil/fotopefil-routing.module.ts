import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotopefilPage } from './fotopefil.page';

const routes: Routes = [
  {
    path: '',
    component: FotopefilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotopefilPageRoutingModule {}
