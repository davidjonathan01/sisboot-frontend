import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile-especialista',
  standalone: true,
  imports: [],
  templateUrl: './profile-especialista.component.html',
  styleUrl: './profile-especialista.component.css'
})
export class ProfileEspecialistaComponent {
  perfil: any = {};   // Aquí almacenamos el perfil del usuario
  idUsuario: number | null = null; // El idUsuario se obtiene del servicio
  idEspecialista: number | null = null;

  constructor(private authService: AuthService) {

  }

 ngOnInit(): void {
   // Llamamos a la función que maneja la lógica de carga del perfil
   this.cargarPerfil();
 }
 cargarPerfil(): void {
   this.idEspecialista = this.authService.getPacienteId();
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
