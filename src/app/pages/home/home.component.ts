import { Component, inject } from '@angular/core';
import { Usuario, Usuario_in } from 'src/app/interfaces/usuario';
import { UsuaariosService } from 'src/app/services/usuaarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrUsuarios:Usuario_in | any;
  usuarioService = inject(UsuaariosService)
  baseUrl = 'https://peticiones.online/api/users/'

  async ngOnInit():Promise<void>{
    try{
      let page1 = await this.usuarioService.getAll(1)
      let page2 = await this.usuarioService.getAll(2)
      this.arrUsuarios = page1.results.concat(page2.results)        
    }catch(error){
      console.log(error)
    }
  }




}
