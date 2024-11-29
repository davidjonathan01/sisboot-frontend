import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Rol } from '../model/rol';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly BASE_URL: string = "http://localhost:8080/api/usuario/";

  constructor(private http: HttpClient) { 
    console.log(this.BASE_URL);
  }

  getTipoUsuarios(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.BASE_URL}rol/get`).pipe(
      catchError(error => {
        console.error(error);
        throw 'Error al obtener tipos de usuario: ' + error.message;
      })
    );
  }

  login(idRol: number, email: string, contrasenia: string): Observable<any> {
    const body = { idRol, email, contrasenia };
    return this.http.post<any>(`${this.BASE_URL}auth/login`, body);
  }

  isLoggedIn(){
    let user = localStorage.getItem('usuarioId');
    if(user ==undefined || user == '' || user == null){
      return false;
    }else{
      return true;
    }
  }
  logout() {
    localStorage.removeItem('usuarioId'); 
    localStorage.removeItem('pacienteId'); 
    localStorage.removeItem('especialistaId'); 
    localStorage.removeItem('administradorId'); 
    return true;
  }

  setUsuarioId(id: number) {
    localStorage.setItem('usuarioId', id.toString());
  }

  getUsuarioId(): number | null {
    const id = localStorage.getItem('usuarioId');
    return id ? parseInt(id, 10) : null;
  }

  setPacienteId(id: number) {
    localStorage.setItem('pacienteId', id.toString());
  }

  getPacienteId(): number | null {
    const id = localStorage.getItem('pacienteId');
    return id ? parseInt(id, 10) : null;
  }

  setEspecialistaId(id: number) {
    localStorage.setItem('especialistaId', id.toString());
  }

  getEspecialistaId(): number | null {
    const id = localStorage.getItem('especialistaId');
    return id ? parseInt(id, 10) : null;
  }

  setAdministradorId(id: number) {
    localStorage.setItem('administradorId', id.toString());
  }

  getAdministradorId(): number | null {
    const id = localStorage.getItem('administradorId');
    return id ? parseInt(id, 10) : null;
  }

  
}
