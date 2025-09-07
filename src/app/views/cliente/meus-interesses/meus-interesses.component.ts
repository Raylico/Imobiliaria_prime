// src/app/views/cliente/meus-interesses/meus-interesses.component.ts

import { Component, OnInit } from '@angular/core';
import { ImoveisService, Imovel, Interesse } from '../../../core/services/imoveis.service';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-meus-interesses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meus-interesses.html',
  styleUrl: './meus-interesses.css'
})
export class MeusInteressesComponent implements OnInit {
  imoveis: Imovel[] = [];

  constructor(
    private imoveisService: ImoveisService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.carregarInteressesDoCliente();
  }

  carregarInteressesDoCliente(): void {
    const clienteId = this.authService.getUserId();
    if (clienteId !== null) {
      this.imoveisService.getImoveisPorInteresseDoCliente(clienteId).subscribe(
        (data) => {
          this.imoveis = data;
          console.log('Interesses do cliente:', data);
        },
        (error) => {
          console.error('Erro ao carregar interesses:', error);
        }
      );
    }
  }

  removerInteresse(imovelId: number): void {
    const clienteId = this.authService.getUserId();

    if (clienteId !== null) {
        // Encontre o interesse para obter seu ID
        this.http.get<Interesse[]>(`${this.apiUrl}/interesses?clienteId=${clienteId}&imovelId=${imovelId}`).subscribe(
            (interesses) => {
                if (interesses.length > 0) {
                    const interesseId = interesses[0].id;
                    this.imoveisService.removerInteresse(interesseId).subscribe(
                        () => {
                            console.log('Interesse removido com sucesso!');
                            alert('Interesse removido com sucesso!');
                            // Recarregar a lista para atualizar a tela
                            this.carregarInteressesDoCliente();
                        },
                        (error) => {
                            console.error('Erro ao remover interesse:', error);
                            alert('Erro ao remover interesse. Tente novamente.');
                        }
                    );
                }
            }
        )
    }
  }
}