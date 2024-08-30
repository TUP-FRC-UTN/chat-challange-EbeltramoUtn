import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { Mensaje } from '../interface/mensaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  @Input() usuario: Usuario;
  @Output() eventMensaje = new EventEmitter<Mensaje>(); 
  mensaje : Mensaje;

  ngOnInit(): void {
    this.mensaje = {
      usuario : this.usuario,
      tiempo : new Date(),
      mensaje: ""
    }
  }
  enviar(){
    this.mensaje.tiempo= new Date();
    this.eventMensaje.emit({...this.mensaje});
    this.mensaje.mensaje = "";
  }
}
