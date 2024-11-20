import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgbAlertModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {} from '@angular/router';
import { ToastComponent } from './common/toast/toast.component';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbAlertModule,
    CommonModule,
    MenuComponent,
    NgbCollapseModule,
    HomeComponent,
    RouterOutlet,
    RouterLink,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
