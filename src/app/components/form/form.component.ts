import { CSP_NONCE, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuaariosService } from 'src/app/services/usuaarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm: FormGroup;
  userService = inject(UsuaariosService)
  activateRoute = inject(ActivatedRoute)
  router = inject(Router)
  px: number = 16;

  constructor(){
    this.userForm = new FormGroup({
      first_name: new FormControl('',[
        Validators.required
      ]),
      last_name: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/)
      ]),
      username: new FormControl('',[
        Validators.required
      ]),
      imagen: new FormControl('',[
        Validators.required
      ]),
  },[])
  }

  sube(){
    this.px = this.px + 1
  }


  ngOnInit(){
    this.activateRoute.params.subscribe(async (params:any)=>{
      let id = params.id
      if(id){
        let user = await this.userService.getById(id)
        this.userForm = new FormGroup({
          first_name: new FormControl(user.first_name,[
            Validators.required
          ]),
          last_name: new FormControl(user.last_name,[
            Validators.required
          ]),
          email: new FormControl(user.email,[
            Validators.required,
            Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/)
          ]),
          username: new FormControl(user.username,[
            Validators.required
          ]),
          imagen: new FormControl(user.image,[
            Validators.required
          ]),
          password: new FormControl(user.password,[
            Validators.required
          ]),
          _id: new FormControl(user._id,[])
      },[])
      }

    })
  }

  async getDataForm(){
    if(this.userForm.value._id){
      let response = await this.userService.update(this.userForm.value)
      Swal.fire({title: 'Usuario actualizado', icon: 'success', timer:1200, timerProgressBar: true, showConfirmButton:false
    })
      this.router.navigate(['/home'])
    }else{
      let response = await this.userService.insert(this.userForm.value)
      Swal.fire({title: 'Usuario añadido', icon: 'success', timer:1200, timerProgressBar: true, showConfirmButton:false
    })
      this.router.navigate(['/home'])
    }
  }

  checkControl(controlName:string, error:string){
    return this.userForm.get(controlName)?.hasError(error) && this.userForm.get(controlName)?.touched
  }
    
}
