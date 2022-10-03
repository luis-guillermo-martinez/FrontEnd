import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { nuevousuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL= "http://localhost:8080/auth";
  
  constructor(private httpClient: HttpClient) { }

  public new(nuevousuario: nuevousuario): Observable<any> {
    return this.httpClient.post(this.authURL + '/newUser', nuevousuario);
  }

  public login(LoginUsuario: LoginUsuario): Observable<JwtDto> {
  return this.httpClient.post<JwtDto>(this.authURL + '/login', LoginUsuario);
  }
  
}