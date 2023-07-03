import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modal-alumnos',
  templateUrl: './modal-alumnos.page.html',
  styleUrls: ['./modal-alumnos.page.scss'],
})
export class ModalAlumnosPage implements OnInit {

  title;
  alumnos;

  constructor() { }

  ngOnInit() {
  }

}
