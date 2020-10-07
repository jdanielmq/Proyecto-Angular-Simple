import { Injectable } from '@angular/core';
import { Cliente } from './cliente'
import { CLIENTES } from './clientes.json';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string = "http://localhost:9090/api/clientes";
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
     //return of(CLIENTES);
     return this.http.get(this.urlEndpoint).pipe(
       map( (response) => response as Cliente[])
     );
  }
}
