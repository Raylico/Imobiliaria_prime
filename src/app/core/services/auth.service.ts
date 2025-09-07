// 

// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser: boolean = false;
  private userProfile: string = '';
  private userId: number | null = null; // Adicione esta propriedade

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }

  getPerfilUsuario(): string {
    return this.userProfile;
  }

  getUserId(): number | null { // Crie este novo método
    return this.userId;
  }

  login(email: string, password: string): boolean {
    if (email === 'corretor@imobiliaria.com' && password === '123') {
      this.isAuthenticatedUser = true;
      this.userProfile = 'corretor';
      this.userId = 1; // Defina o ID do corretor
      console.log('Login do corretor efetuado!');
      return true;
    } else if (email === 'cliente@imobiliaria.com' && password === '456') {
      this.isAuthenticatedUser = true;
      this.userProfile = 'cliente';
      this.userId = 2; // Defina o ID do cliente
      console.log('Login do cliente efetuado!');
      return true;
    } else {
      this.isAuthenticatedUser = false;
      this.userProfile = '';
      this.userId = null;
      console.log('Login falhou. Credenciais incorretas.');
      return false;
    }
  }

  logout(): void {
    this.isAuthenticatedUser = false;
    this.userProfile = '';
    this.userId = null;
    console.log('Logout efetuado. Usuário desautenticado.');
  }
}