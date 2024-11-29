import { Rol } from "./rol";

export interface Usuario {
    idUsuario: number;
    email: string;
    contrasenia: string;
    rolId: number;

    rol:Rol;
  }
  