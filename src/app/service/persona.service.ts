import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class PersonaService {
//   URL = 'https://portbackendlgm.herokuapp.com/personas/' ;

//   constructor(private http: HttpClient) { }
//     public getPersona():Observable <persona> {
//       return this.http.get<persona>(this.URL + 'traer/perfil');
//     }
  
// }


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiURL = 'http://localhost:8080/Persona/';

  constructor (private http: HttpClient) { }

  public listPersona(): Observable<persona> {
    return this.http.get<persona>(this.apiURL+ 'list');
  }

  public detailPersona(id: number): Observable<persona> {
    return this.http.get<persona>(this.apiURL+ `detail/${id}`);
  }

  public savePersona(per: persona): Observable<any> {
    return this.http.post<any>(this.apiURL+ 'save/', per);
  }

  public updatePersona(id: number, exp: persona): Observable<any> {
    return this.http.put<any>(this.apiURL+ `update/${id}`, exp);
  }

  public deletePersona(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL+ `delete/${id}`);
  }

}
