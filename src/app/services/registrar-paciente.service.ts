import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../model/genero';
import { Condicion } from '../model/condicion';
import { Carrera } from '../model/carrera';
import { Ubigeo } from '../model/ubigeo';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root',
})
export class RegistrarPacienteService {
  private apiUrl = 'http://localhost:8080/api/usuario'; // Base URL para el backend

  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }

  // Obtener géneros
  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(`${this.apiUrl}/genero/listar`);
  }

  // Obtener condiciones
  getCondiciones(): Observable<Condicion[]> {
    return this.http.get<Condicion[]>(`${this.apiUrl}/condicion/listar`);
  }

  // Obtener carreras
  getCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(`${this.apiUrl}/carrera/listar`);
  }

  // Obtener departamentos
  getDepartamentos(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/ubigeo/departamentos`);
  }

  // Obtener provincias por departamento
  getProvincias(departamento: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/ubigeo/provincias/${departamento}`);
  }

  // Obtener distritos por provincia
  getDistritos(provincia: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/ubigeo/distritos/${provincia}`);
  }

  registrarPaciente(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/paciente/registrar`, datos);
  }
}
