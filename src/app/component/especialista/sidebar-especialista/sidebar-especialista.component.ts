import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-especialista',
  standalone: true,
  imports: [MatSidenavModule,MatListModule,MatCardModule,RouterModule, MatIconModule],
  templateUrl: './sidebar-especialista.component.html',
  styleUrl: './sidebar-especialista.component.css'
})
export class SidebarEspecialistaComponent {
  isSidebarVisible: boolean = true; // Controla la visibilidad del sidebar

  constructor(private authService: AuthService, private router: Router) {}

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Alterna el estado
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
