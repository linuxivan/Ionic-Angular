import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './servicios/storage.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public appPages = [];
  public user;
  constructor(private storage: StorageService, private route: Router) {
    this.checkLogin().subscribe((usuario) => {
      console.log(usuario);
      if (usuario) {
        this.user = usuario;
        if (usuario.admin) {
          this.appPages = [
            { title: 'Inicio', url: '/inicio', icon: 'home' },
            { title: 'Foto de perfil', url: '/fotopefil', icon: 'camera' },
            { title: 'Alta', url: '/alta', icon: 'person' },
          ];
        }else {
          this.appPages = [
            { title: 'Inicio', url: '/inicio', icon: 'home' },
            { title: 'Foto de perfil', url: '/fotopefil', icon: 'camera' },
          ];
        }
        route.navigateByUrl('/inicio');
      } else {
        this.appPages = [
          { title: 'Iniciar sesión', url: '/login', icon: 'log-in' },
        ];
        route.navigateByUrl('/login');
      }
    });
  }

  public logout() {
    this.storage.removeItem('usuario');
    this.user = null;
  }

  public checkLogin(): Observable<any> {
    return this.storage.getItem('usuario');
  }
}
