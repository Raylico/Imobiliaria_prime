
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) { 
    const perfisAutorizados = route.data['perfil'];
    const getPerfilUsuario = authService.getPerfilUsuario();
    if (perfisAutorizados && !perfisAutorizados.includes(authService.getPerfilUsuario())) {
      router.navigate(['/acesso-negado']);
      return false;
    }
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};