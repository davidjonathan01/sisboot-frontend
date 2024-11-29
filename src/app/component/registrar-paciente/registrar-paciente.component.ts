import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Genero } from '../../model/genero';
import { Condicion } from '../../model/condicion';
import { Carrera } from '../../model/carrera';
import { RegistrarPacienteService } from '../../services/registrar-paciente.service';
import Swal from 'sweetalert2';
import { Ubigeo } from '../../model/ubigeo';

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css'
})
export class RegistrarPacienteComponent implements OnInit {
  generos: Genero[] = [];
  carreras: Carrera[] = [];
  carrerasFilter: Carrera[] = [];
  ubigeos: Ubigeo[] = [];
  condiciones: Condicion[] = [];

  departamentos_filtrados: string[] = [];
  provincias_filtradas: string[] = [];
  distritos_filtrados: Ubigeo[] = [];
  departamento_seleccionado: string = '';
  provincia_seleccionada: string = '';


  personaForm: FormGroup;
  esAlumno: boolean = false; // Indica si el usuario seleccionó "Alumno"

  constructor(private registrarPacienteService: RegistrarPacienteService) {
    this.personaForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      fecNacimiento: new FormControl('', [Validators.required]),
      docIdentidad: new FormControl('', [Validators.required, Validators.minLength(8)]),
      idGenero: new FormControl('', [Validators.required]),
      numTelefono: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasenia: new FormControl('', [Validators.required, Validators.minLength(6)]),
      idCondicion: new FormControl('', [Validators.required]),
      idCarrera: new FormControl(''),
      idUbigeo: new FormControl('', [Validators.required]),
      departamento_seleccionado: new FormControl(''),
      provincia_seleccionada: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.loadGeneros();
    this.loadCondiciones();
    this.loadCarreras();
    this.loadDepartamentos();
  }

  loadGeneros() {
    this.registrarPacienteService.getGeneros().subscribe(
      (result: any) => {
        this.generos = result;
      },
      (err: any) => {
        Swal.fire('Error', 'No se pudieron cargar los géneros. Inténtalo de nuevo más tarde.', 'error');
        console.error('Error al cargar generos', err);
      }
    );
  }

  loadCondiciones() {
    this.registrarPacienteService.getCondiciones().subscribe(
      (result: any) => {
        this.condiciones = result;
      },
      (err: any) => {
        Swal.fire('Error', 'No se pudieron cargar las condiciones. Inténtalo de nuevo más tarde.', 'error');
        console.error('Error al cargar condiciones', err);
      }
    );
  }

  loadCarreras() {
    this.registrarPacienteService.getCarreras().subscribe(
      (result: any) => {
        this.carreras = result;
      },
      (err: any) => {
        Swal.fire('Error', 'No se pudieron cargar las carreras. Inténtalo de nuevo más tarde.', 'error');
        console.error('Error al cargar carreras', err);
      }
    );
  }

  loadDepartamentos() {
    this.registrarPacienteService.getDepartamentos().subscribe(
      (result: any) => {
        this.departamentos_filtrados = result;
      },
      (err: any) => {
        Swal.fire('Error', 'No se pudieron cargar los departamentos. Inténtalo de nuevo más tarde.', 'error');
        console.error('Error al cargar departamentos', err);
      }
    );
  }

  onDepartamentoChange() {
    const departamento = this.personaForm.get('departamento_seleccionado')?.value;
    if (departamento) {
      this.registrarPacienteService.getProvincias(departamento).subscribe(
        (result: any) => {
          this.provincias_filtradas = result;
          this.distritos_filtrados = [];
          this.personaForm.get('provincia_seleccionada')?.reset();
          this.personaForm.get('id_ubigeo')?.reset();
        },
        (err: any) => {
          console.error('Error al cargar provincias', err);
        }
      );
    }
  }

  onProvinciaChange() {
    const provincia = this.personaForm.get('provincia_seleccionada')?.value;
    if (provincia) {
      this.registrarPacienteService.getDistritos(provincia).subscribe(
        (result: any) => {
          this.distritos_filtrados = result;
          console.log("Distirtios",this.distritos_filtrados)
        },
        (err: any) => {
          console.error('Error al cargar distritos', err);
        }
      );
    }
  }



  registrarPaciente() {
    if (this.personaForm.valid) {
      const datos = {
        nombres: this.personaForm.get('nombres')?.value,
        apellidos: this.personaForm.get('apellidos')?.value,
        fecNacimiento: this.personaForm.get('fecNacimiento')?.value,
        docIdentidad: this.personaForm.get('docIdentidad')?.value,
        idGenero: this.personaForm.get('idGenero')?.value,
        numTelefono: this.personaForm.get('numTelefono')?.value,
        idCondicion: this.personaForm.get('idCondicion')?.value,
        idUbigeo: this.personaForm.get('idUbigeo')?.value,
        idCarrera: this.esAlumno ? this.personaForm.get('idCarrera')?.value : null, // Si es alumno, se incluye la carrera
        email: this.personaForm.get('email')?.value, // Se pasa email por separado
        contrasenia: this.personaForm.get('contrasenia')?.value, // Se pasa contraseña por separado
      };

      console.log(datos)
  
      this.registrarPacienteService.registrarPaciente(datos).subscribe({
        next: (response) => {
          if (response.mensaje === "Nuevo perfil creado") {
            Swal.fire('Éxito', 'Nuevo perfil creado.', 'success');
          } else {
            Swal.fire('Éxito', 'Perfil creado exitosamente.', 'success');
          }
          this.personaForm.reset();
        },
        error: (err) => {
          let errorMessage = 'Ocurrió un error inesperado.';
      
          // Verifica si el error contiene un mensaje en formato JSON
          if (err.error) {
            if (typeof err.error === 'string') {
              try {
                // Intenta convertir el string en JSON si viene como texto
                const parsedError = JSON.parse(err.error);
                if (parsedError.message) {
                  errorMessage = parsedError.message;
                }
              } catch (parseError) {
                // Si no es JSON válido, muestra el mensaje como está
                errorMessage = err.error;
              }
            } else if (err.error.message) {
              // Si ya es un objeto JSON, toma el mensaje
              errorMessage = err.error.message;
            }
          }
      
          Swal.fire('Error', errorMessage, 'error');
        },
      });
    } else {
      Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos requeridos.', 'error');
    }
  }

  onCondicionChange() {
    const condicion = this.personaForm.get('idCondicion')?.value;
    console.log(condicion)
  
    // Si la condición seleccionada es "Alumno" (supongamos que su ID es 2)
    if (condicion === '1') {
      this.esAlumno = true; // Activar modo "Alumno"
      this.registrarPacienteService.getCarreras().subscribe((carreras) => {
        this.carreras = carreras; // Se obtienen las carreras de la base de datos
        this.personaForm.get('idCarrera')?.setValidators([Validators.required]); // Hacer obligatorio el campo carrera
        this.personaForm.get('idCarrera')?.updateValueAndValidity();
      });
    } else {
      console.log("No entro al if")
      this.esAlumno = false; // Desactivar modo "Alumno"
      // En cualquier otra condición, el campo Carrera pasa a ser un campo opcional tipo texto
      this.carreras = []; // Se limpia el listado de carreras
      this.personaForm.get('idCarrera')?.clearValidators(); // Eliminamos los validadores
      this.personaForm.get('idCarrera')?.updateValueAndValidity();
    }
  }
}