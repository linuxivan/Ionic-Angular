import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAlumnosPage } from './modal-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAlumnosPageRoutingModule {}
