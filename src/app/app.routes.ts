import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
 import { EspecialistaDashboardComponent } from './component/especialista/especialista-dashboard/especialista-dashboard.component';
 import { PacienteDashboardComponent } from './component/paciente/paciente-dashboard/paciente-dashboard.component';
 import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
 import { RegistrarPacienteComponent } from './component/registrar-paciente/registrar-paciente.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'paciente-dashboard', component: PacienteDashboardComponent },
    { path: 'especialista-dashboard', component: EspecialistaDashboardComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent},
    { path: 'registrar-paciente', component: RegistrarPacienteComponent}
  
  ];