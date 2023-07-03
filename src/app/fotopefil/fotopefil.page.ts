import {Component, OnInit} from '@angular/core';
import {Camera, CameraResultType} from '@capacitor/camera';
import {StorageService} from "../servicios/storage.service";
import {CursosService} from "../servicios/cursos.service";

@Component({
  selector: 'app-fotopefil',
  templateUrl: './fotopefil.page.html',
  styleUrls: ['./fotopefil.page.scss'],
})
export class FotopefilPage implements OnInit {

  fotoPerfil;

  constructor(private cursosService: CursosService, private storage: StorageService) {
  }

  ngOnInit() {
    this.fotoPerfil = this.storage.getItem('usuario').value['fotoPerfil'];
    console.log(this.fotoPerfil);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 5,
      resultType: CameraResultType.Base64
    });


    return image;

  }

  cambiarFoto() {

    this.takePicture().then((image) => {
      this.fotoPerfil = 'data:image/jpeg;base64,' + image.base64String;
      this.cursosService.subirFotoPerfil(this.fotoPerfil, this.storage.getItem('usuario').value['id']).subscribe((data) => {
        //TODO hacer que se actualice la foto de perfil
      });
    });


  }
}
