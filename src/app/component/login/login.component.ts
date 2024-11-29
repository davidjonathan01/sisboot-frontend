import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../model/rol';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  roles : Rol[]=[];

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      idRol: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasenia: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
    this.loadTipoUsuarios();
  }

  loadTipoUsuarios() {
    this.authService.getTipoUsuarios().subscribe(
      (result: any) => {
        console.log('Todo bien');
        console.log(result)
        this.roles = result;
      },
      (err: any) => {
        console.error('Error al cargar tipos de usuario', err);
      }
    );
  }
  onSubmit(): void {
      const { idRol, email, contrasenia } = this.loginForm.value;
      console.log(idRol, email,contrasenia)
      this.authService.login(idRol, email, contrasenia).subscribe(
        response => {
          console.log(response)
          if (response.status === 200) {
            this.authService.setUsuarioId(response.idUsuario); // Almacenar el ID del usuario
            if (response.idRol === 1) { // Administrador
              this.authService.setPacienteId(response.idAdministrador);
            } else if (response.idRol === 2) { // Especialista
              this.authService.setEspecialistaId(response.idEspecialista);
            } else if (response.idRol === 3) { // Paciente
              this.authService.setAdministradorId(response.idPaciente);
            }
            console.log('Tipo de usuario devuelto:', response.idRol); // Imprimir el tipo de usuario en la consola
            console.log("Autenticado exitosamente")
            console.log(localStorage)
            this.redirectUser(response.idRol);
            Swal.fire('¡Éxito!', 'Inicio de sesión exitoso', 'success');
          } else {
            Swal.fire('¡Error!', response.message, 'error');
          }
        },
        error => {
          Swal.fire('¡Error!', 'Ingrese un usuario válido', 'error');
        }
      );
  }

  redirectUser(id_tipo_usuario: number) {
    console.log("Id: ",id_tipo_usuario)
    if (id_tipo_usuario === 1) {
      this.router.navigate(['/admin-dashboard']);
    } else if (id_tipo_usuario === 2) {
      this.router.navigate(['/especialista-dashboard']);
    } else if (id_tipo_usuario === 3) {
      this.router.navigate(['/paciente-dashboard']);
    }
  }
}
