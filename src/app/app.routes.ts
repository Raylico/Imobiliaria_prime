// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './views/public/login/login.component';
import { authGuard } from './core/guards/auth-guard';
import { AcessoNegado } from './views/public/acesso-negado/acesso-negado.component';
import { HomeComponent } from './views/public/home/home.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { MeusInteressesComponent } from './views/cliente/meus-interesses/meus-interesses.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'corretor',
    canActivate: [authGuard],
    data: { perfil: 'corretor' },
    loadComponent: () => import('./views/corretor/corretor.component').then(m => m.CorretorComponent)
  },
  {
    path: 'cliente',
    canActivate: [authGuard],
    data: { perfil: 'cliente' },
    component: ClienteComponent,
    children: [
      {
        path: '',
        component: MeusInteressesComponent
      }
    ]
  },
  {
    path: 'acesso-negado',
    component: AcessoNegado
  }
];