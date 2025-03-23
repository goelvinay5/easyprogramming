import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../../modals/login/login.component';
import { SignupComponent } from '../../modals/signup/signup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username = '';

  constructor(
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.isLoggedIn = !!user;
      this.username = user?.username || '';
    });
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      panelClass: 'login-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Refresh current route or perform any other action after successful login
      }
    });
  }

  openSignupModal(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px',
      panelClass: 'signup-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Refresh current route or perform any other action after successful signup
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
