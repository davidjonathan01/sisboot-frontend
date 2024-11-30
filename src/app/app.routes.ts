import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
 import { EspecialistaDashboardComponent } from './component/especialista/especialista-dashboard/especialista-dashboard.component';
 import { PacienteDashboardComponent } from './component/paciente/paciente-dashboard/paciente-dashboard.component';
 import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
 import { RegistrarPacienteComponent } from './component/registrar-paciente/registrar-paciente.component';
import { RealizarTestComponent } from './component/paciente/realizar-test/realizar-test.component';
import { HomePacienteComponent } from './component/paciente/home-paciente/home-paciente.component';
import { ProfilePacienteComponent } from './component/paciente/profile-paciente/profile-paciente.component';
import { ResultadosPacienteComponent } from './component/paciente/resultados-paciente/resultados-paciente.component';
import { EvaluacionesPacienteComponent } from './component/paciente/evaluaciones-paciente/evaluaciones-paciente.component';
import { HomeEspecialistaComponent } from './component/especialista/home-especialista/home-especialista.component';
import { ProfileEspecialistaComponent } from './component/especialista/profile-especialista/profile-especialista.component';
import { EvaluacionesEspecialistaComponent } from './component/especialista/evaluaciones-especialista/evaluaciones-especialista.component';
import { ResultadosEspecialistaComponent } from './component/especialista/resultados-especialista/resultados-especialista.component';
import { HomeAdminComponent } from './component/admin/home-admin/home-admin.component';
import { ProfileAdminComponent } from './component/admin/profile-admin/profile-admin.component';
import { RegistrarEspecialistaAdminComponent } from './component/admin/registrar-especialista-admin/registrar-especialista-admin.component';
import { RegistrarPacienteAdminComponent } from './component/admin/registrar-paciente-admin/registrar-paciente-admin.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'paciente-dashboard',
      component: PacienteDashboardComponent,
      children:[
        {path: '', redirectTo:'home', pathMatch: 'full'},
        {path: 'home', component:HomePacienteComponent},
        {path: 'profile', component: ProfilePacienteComponent},
        {path: 'realizar-test', component: RealizarTestComponent},
        {path: 'resultados', component:ResultadosPacienteComponent},
        {path: 'evaluaciones', component:EvaluacionesPacienteComponent}
      ]
    },
    { path: 'especialista-dashboard',
      component: EspecialistaDashboardComponent,
      children:[
        {path: '', redirectTo:'home', pathMatch: 'full'},
        {path: 'home', component:HomeEspecialistaComponent},
        {path: 'profile', component: ProfileEspecialistaComponent},
        {path: 'evaluaciones', component: EvaluacionesEspecialistaComponent},
        {path: 'resultados', component:ResultadosEspecialistaComponent}
      ]
    },
    
    { path: 'admin-dashboard',
       component: AdminDashboardComponent,
       children:[
        {path: '', redirectTo:'home', pathMatch: 'full'},
        {path: 'home', component:HomeAdminComponent},
        {path: 'profile', component: ProfileAdminComponent},
        {path: 'registrar-paciente', component: RegistrarEspecialistaAdminComponent},
        {path: 'registrar-especialista', component:RegistrarPacienteAdminComponent}
      ]
      },
    { path: 'registrar-paciente', component: RegistrarPacienteComponent}
  
  ];