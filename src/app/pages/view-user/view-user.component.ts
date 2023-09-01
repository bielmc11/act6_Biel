import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario_in } from 'src/app/interfaces/usuario';
import { UsuaariosService } from 'src/app/services/usuaarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  usuario:Usuario_in | any;
  usuarioService = inject(UsuaariosService);
  activateRoute = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.activateRoute.params.subscribe( async (params:any)=>{
      this.usuario = await this.usuarioService.getById(params.id)
    })
  }



   async eliminar(): Promise<void>{
    let response = await this.usuarioService.deletUser(this.usuario._id)

    if (response.error){
      Swal.fire('Ha ocurrido un error', '', 'error')
    }else{
      Swal.fire({icon: 'success',
      title: 'Usuario eliminado correctamente',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      
    })
    this.router.navigate(['/home'])
    }
  }
 

}
