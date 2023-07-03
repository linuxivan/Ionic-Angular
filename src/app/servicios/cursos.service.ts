import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  url = 'http://192.168.0.213:8000/ws/';

  constructor(public httpClient: HttpClient) { }

  checkLogin(username, password) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers
    };

    const data = {
      username,
      password
    };
    return this.httpClient.post(this.url + 'users/login', data, options);
  }

  getCursos() {
    return this.httpClient.get(this.url + 'cursos');
  }

  getNotaCurso(user, curso) {
    return this.httpClient.get(this.url + 'getnotacurso/' + user + '/' + curso);
  }

  getAlumnosCurso(curso){
    return this.httpClient.get(this.url + 'cursousuarios/' + curso);
  }

  getUsuarios() {
    return this.httpClient.get(this.url + 'users');
  }

  altaCurso(usuario, curso, nota) {
    return this.httpClient.put(this.url + 'cursosusuariosadd', {usuario, curso, nota});
  }

  subirFotoPerfil(fotoPerfil, iduser) {
    return this.httpClient.post(this.url + 'fotoperfil', {fotoPerfil, iduser});
  }
}
