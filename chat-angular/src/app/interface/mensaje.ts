import { Usuario } from "./usuario";

export interface Mensaje {
    usuario: Usuario,
    tiempo: Date,
    mensaje: string
}
