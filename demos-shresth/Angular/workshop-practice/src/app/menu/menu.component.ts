import { Component, inject } from '@angular/core';
import {
  NgbAlertModule,
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../common/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgbCollapseModule,
    NgbDropdownModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isNavbarCollapsed = true;
  authService = inject(AuthService);
  constructor(private router: Router) {}
  loggedout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
