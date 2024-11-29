import { Genero } from './genero';
import { Condicion } from './condicion';
import { Carrera } from './carrera';
import { Ubigeo } from './ubigeo';
import { Usuario } from './usuario';

export interface Paciente {
  idPaciente: number;
  doc_identidad: string;
  nombres: string;
  apellidos: string;
  fec_nacimiento: Date;
  num_telefono: string;
  id_genero: number;
  id_ubigeo: number;
  id_condicion: number;
  id_carrera?: number;
  id_usuario: number;
  
  genero:Genero;
  ubigeo:Ubigeo;
  condicion:Condicion;
  carrera:Carrera;
  usuario: Usuario;
}
