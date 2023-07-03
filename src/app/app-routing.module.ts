import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alta',
    loadChildren: () => import('./alta/alta.module').then( m => m.AltaPageModule)
  },
  {
    path: 'modal-alumnos',
    loadChildren: () => import('./modal-alumnos/modal-alumnos.module').then( m => m.ModalAlumnosPageModule)
  },
  {
    path: 'fotopefil',
    loadChildren: () => import('./fotopefil/fotopefil.module').then( m => m.FotopefilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
