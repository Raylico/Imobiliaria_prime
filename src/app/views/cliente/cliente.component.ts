import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importe o RouterOutlet

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterOutlet], // Adicione RouterOutlet nos imports
  template: `
    <h2>Área do Cliente</h2>
    <p>Bem-vindo! Aqui você pode gerenciar seus interesses.</p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./cliente.css']  
})
export class ClienteComponent { }