import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { Usuario } from '../interface/usuario';
import { Mensaje } from '../interface/mensaje';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [ChatComponent, CommonModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent implements OnInit {
    usuarios: Usuario[]=[];
    mensajes: Mensaje[]=[];
  ngOnInit(): void {
    this.usuarios.push({
      name: "pepe"
    })
    this.usuarios.push({
      name: "maria"
    })
  }
  agregarMensaje(event: Mensaje){
    this.mensajes.push(event)
    console.log(this.mensajes)
  }
}
