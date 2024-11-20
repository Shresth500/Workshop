import { Component } from '@angular/core';
import { NgbAlertModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
class HomeComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/']);
  }
}

export { HomeComponent };
