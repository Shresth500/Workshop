import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../common/auth/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  credentials: any = {
    email: 'john.doe@example.com',
    password: 'Password123#',
  };

  loading = false;
  returnUrl!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (loginResponse) => {
        this.router.navigateByUrl('/workshops');
      },
      error: (error) => {
        alert(`Either Email or password is incorrect`);
      },
    });
  }
}
