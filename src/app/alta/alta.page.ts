import {Component, OnInit} from '@angular/core';
import {CursosService} from '../servicios/cursos.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.page.html',
  styleUrls: ['./alta.page.scss'],
})
export class AltaPage implements OnInit {

  cursos;
  usuarios;

  selectedcurso;
  selecteduser;
  nota;
  constructor(private loading: LoadingController, private cursosService: CursosService) {
  }

  ngOnInit() {
    this.loading.create({
      message: 'Cargando cursos y usuarios...'
    }).then((overlay) => {
      overlay.present();
      this.cursosService.getCursos().subscribe(cursos => {
        this.cursos = cursos;
      });
      this.cursosService.getUsuarios().subscribe(usuarios => {
        this.usuarios = usuarios;
      });
    }).then(() => {
      this.loading.dismiss();
    });
  }

  altaCurso() {
    this.cursosService.getNotaCurso(this.selecteduser, this.selectedcurso).subscribe(data => {
      if (data['error']) {
        this.cursosService.altaCurso(this.selecteduser, this.selectedcurso, this.nota).subscribe(res => {
          if (res['success']){
            alert('Alta realizada correctamente');
          }else {
            alert('Error al realizar la alta');
          }

        });
      } else {
        alert('El usuario ya tiene una nota en el curso');
      }
    });
  }
}
