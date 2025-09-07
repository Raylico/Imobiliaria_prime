// src/app/views/public/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { ImoveisService, Imovel } from '../../../core/services/imoveis.service';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  imoveis: Imovel[] = [];

  constructor(
    private imoveisService: ImoveisService,
    private authService: AuthService, // Injete o AuthService
    private router: Router // Injete o Router
  ) { }

  ngOnInit(): void {
    this.imoveisService.getTodosOsImoveis().subscribe(
      (data) => {
        this.imoveis = data;
      },
      (error) => {
        console.error('Erro ao carregar imóveis:', error);
      }
    );
  }

  marcarInteresse(imovelId: number): void {
    const clienteId = this.authService.getUserId();
    
    if (this.authService.getPerfilUsuario() === 'cliente' && clienteId !== null) {
      this.imoveisService.marcarInteresse(clienteId, imovelId).subscribe(
        (response) => {
          console.log('Interesse marcado com sucesso!', response);
          alert('Interesse marcado com sucesso!');
        },
        (error) => {
          console.error('Erro ao marcar interesse:', error);
          alert('Erro ao marcar interesse. Tente novamente.');
        }
      );
    } else {
      alert('Apenas clientes podem marcar interesse. Por favor, faça o login.');
      this.router.navigate(['/login']);
    }
  }
}