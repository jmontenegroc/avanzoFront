import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string =''+ '/api/clients/credits/find/';

constructor(private http:HttpClient) { }

getClient(id: string): Observable<Cliente> {
  return this.http.get<Cliente>(this.apiUrl + id);}
}
