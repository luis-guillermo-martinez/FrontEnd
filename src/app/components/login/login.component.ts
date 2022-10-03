import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  isLogged = false;
  isLogginFail = false;
  loginUser! : LoginUsuario;
  nameUser! : string;
  password! : string;
  roles : string[] = [];
  msjError! : string;
 
   constructor(private router: Router, private authService: AuthService, private tokenService: TokenService) { }
 
   ngOnInit(): void {
     if(this.tokenService.getToken()){
       this.isLogged=true;
       this.isLogginFail=false;
       this.roles=this.tokenService.getAuthorities();
     }
   }
 
   volver(){
     this.router.navigate(['/'])
   }
 
   onLogin(): void{
     this.loginUser = new LoginUsuario (this.nameUser, this.password);
     this.authService.login(this.loginUser).subscribe(data =>{
         this.isLogged = true;
         this.isLogginFail = false;
         this.tokenService.setToken(data.token);
         this.tokenService.setUserName(data.userName);
         this.tokenService.setAuthorities(data.authorities);
         this.roles = data.authorities;
         this.router.navigate([''])
       }, err=>{
         this.isLogged = false;
         this.isLogginFail = true;
         this.msjError = err.error.mensaje;
         console.log(this.msjError);
       })
   }
 }