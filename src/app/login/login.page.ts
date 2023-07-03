import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { StorageService } from '../servicios/storage.service';
import { Usuario } from '../models/usuario';
import { LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    name: '',
    pass: ''
  };
  constructor(private loading: LoadingController,private cursosService: CursosService, private storage: StorageService) { }

  ngOnInit() {
  }

  submitLogin(){
    this.loading.create({
      message: 'Iniciando sesión...'
    }).then((overlay) => {
      overlay.present();
      this.cursosService.checkLogin(this.usuario.name, this.usuario.pass).subscribe(data => {
        if (data['status'] == 'ok') {
          const user = new Usuario();
          user.id = data['id'];
          user.name = data['username'];
          // 'data:image/jpeg;base64,' + image.base64String;
          user.fotoperfil = data['fotoPerfil'];
          user.admin = data['admin'];

          // this.storage.set('user', user);
          this.storage.setItem('usuario', user);

        }else{
          this.storage.removeItem('usuario');
        }
      });
      overlay.dismiss();
    });






  }
}
