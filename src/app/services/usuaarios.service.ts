import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Usuario, Usuario_in } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuaariosService {
  private baseUrl = 'https://peticiones.online/api/users';
  private page2 = 'https://peticiones.online/api/users?page=2'
  httpClient = inject(HttpClient)

  constructor() { }

  getAll(page: number): Promise<Usuario>{
    return lastValueFrom(this.httpClient.get<Usuario>(`${this.baseUrl}?page=${page}`))
  }

  
  getById(id:string): Promise<Usuario_in>{
    return lastValueFrom(this.httpClient.get<Usuario_in>(`${this.baseUrl}/${id}`))
  }
  
  deletUser(id:string):Promise<any>{
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${id}`))
  }

  insert(formValue: any): Promise<any>{ //ME FALTA VER SI PUEDO PONER LA INTERF, PERO DE MOMENTO PONGO ANY
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, formValue))
  }

  update(formValue: any):Promise<any>{ //AQUI ME FALTA VER SI PROMISE Y PUT SON <ANY>
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/${formValue._id}`, formValue ))
  }
}
