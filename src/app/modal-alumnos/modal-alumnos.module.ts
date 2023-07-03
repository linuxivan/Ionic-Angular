import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAlumnosPageRoutingModule } from './modal-alumnos-routing.module';

import { ModalAlumnosPage } from './modal-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAlumnosPageRoutingModule
  ],
  declarations: [ModalAlumnosPage]
})
export class ModalAlumnosPageModule {}
