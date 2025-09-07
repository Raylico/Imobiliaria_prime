import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = ''; 
  
  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    const loginSuccess = this.authService.login(this.email, this.password);
    if (loginSuccess) {
      if (this.authService.getPerfilUsuario() === 'corretor') {
        this.router.navigate(['/corretor']);
      } else if (this.authService.getPerfilUsuario() === 'cliente') {
        this.router.navigate(['/cliente']);
      }
    } else {
      alert('Login falhou. Credenciais incorretas.');
    }
  }
}
