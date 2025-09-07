// src/app/core/services/imoveis.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Defina as interfaces (modelos de dados) para Imovel e Interesse
export interface Imovel {
  id: number;
  titulo: string;
  corretorId: number;
  tipo: string;
  cidade: string;
  preco: number;
  descricao: string;
  imagemUrl: string;
}

export interface Interesse {
  id: number;
  clienteId: number;
  imovelId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getImoveisPorInteresseDoCliente(clienteId: number): Observable<Imovel[]> {
    return this.http.get<any[]>(`${this.apiUrl}/interesses?clienteId=${clienteId}&_expand=imovel`);
  }

  getTodosOsImoveis(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(`${this.apiUrl}/imoveis`);
  }
  
  marcarInteresse(clienteId: number, imovelId: number): Observable<Interesse> {
    const interesse = { clienteId, imovelId };
    return this.http.post<Interesse>(`${this.apiUrl}/interesses`, interesse);
  }
    removerInteresse(interesseId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/interesses/${interesseId}`);
  }
}