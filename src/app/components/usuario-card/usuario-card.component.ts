import { Component, Input, inject } from '@angular/core';
import { Usuario_in } from 'src/app/interfaces/usuario';
import { UsuaariosService } from 'src/app/services/usuaarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css'],
})
export class UsuarioCardComponent {
  @Input() miUsuario: Usuario_in | any;
  userService = inject(UsuaariosService);


  async delete() {
    alert('Desea eliminar el usuario?');
    let response = await this.userService.deletUser(this.miUsuario._id);
  }

  async eliminar() {
    let response = await this.userService.deletUser(this.miUsuario._id);
    if (response.error) {
      Swal.fire('Ha ocurrido un error', '', 'error');
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Usuario eliminado correctamente',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,

      });
    }
  }

  
}
