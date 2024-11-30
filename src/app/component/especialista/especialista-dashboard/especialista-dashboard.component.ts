import { Component } from '@angular/core';
import { SidebarEspecialistaComponent } from '../sidebar-especialista/sidebar-especialista.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-especialista-dashboard',
  standalone: true,
  imports: [SidebarEspecialistaComponent, RouterOutlet],
  templateUrl: './especialista-dashboard.component.html',
  styleUrl: './especialista-dashboard.component.css'
})
export class EspecialistaDashboardComponent {

}
