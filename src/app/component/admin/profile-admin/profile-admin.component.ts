import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-admin',
  standalone: true,
  imports: [],
  templateUrl: './profile-admin.component.html',
  styleUrl: './profile-admin.component.css'
})
export class ProfileAdminComponent {
  perfil: any = {};   // Aquí almacenamos el perfil del usuario
  idUsuario: number | null = null; // El idUsuario se obtiene del servicio
  idAdministrador: number | null = null;

  constructor(private authService: AuthService) {

   }

  ngOnInit(): void {
    // Llamamos a la función que maneja la lógica de carga del perfil
    this.cargarPerfil();
  }
  cargarPerfil(): void {
    this.idAdministrador = this.authService.getPacienteId();
    this.idUsuario = this.authService.getUsuarioId();

    // Obtener el perfil desde el servicio
    const perfil = this.authService.getPerfil();
    
    // Asignar el perfil al componente si existe
    if (perfil) {
      this.perfil = perfil;
    } else {
      Swal.fire('¡Error!','No se encontró el perfil en localStorage','error');
    }
  }

}
