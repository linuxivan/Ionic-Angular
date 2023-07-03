import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../servicios/storage.service';
import { ToastController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { ModalAlumnosPage } from "../modal-alumnos/modal-alumnos.page";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  private cursos;
  private user;
  constructor(private modalController: ModalController, private cursosService: CursosService, private loading: LoadingController, private storage: StorageService, private toast: ToastController) { }

  ngOnInit() {
    this.loading.create({
      message: 'Cargando cursos...'
    }).then((loading) => {
      loading.present();
      this.cursosService.getCursos().subscribe(data => {
        this.cursos = data;
        loading.dismiss();
      });
    });

    this.storage.getItem('usuario').subscribe((usuario) => {
      this.user = usuario;
    });
  }

  verCurso(curso){
    if (!this.user.admin) {
      this.cursosService.getNotaCurso(this.user.id, curso.id).subscribe(data => {
        let mensaje;

        console.log(data);
        if (data['nota'] == null){
          mensaje = 'No has realizado este curso';
        }else{
          mensaje = 'Tu nota es: ' + data['nota'];
        }
        this.toast.create({
          message: mensaje,
          duration: 3000,
          position: 'top'
        }).then((toast) => {
          toast.present();
        });
      });
    }else {
      this.loading.create({
        message: 'Cargando alumnos...'
      }).then((loading) => {
        loading.present();
        this.cursosService.getAlumnosCurso(curso.id).subscribe(data => {
          this.presentModal(data, curso.nombre);
          loading.dismiss();
        });
      });
    }
  }

  async presentModal(usuarios, curso){
    const modal = await this.modalController.create({
      component: ModalAlumnosPage,
      componentProps: {
        alumnos: usuarios.alumnos,
        title: curso
      }
    });
    return await modal.present();
  }

}
