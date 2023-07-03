import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotopefilPageRoutingModule } from './fotopefil-routing.module';

import { FotopefilPage } from './fotopefil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotopefilPageRoutingModule
  ],
  declarations: [FotopefilPage]
})
export class FotopefilPageModule {}
