import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

private apiUrl: string =  ''+'/api/clients/credits/all';

constructor(private http:HttpClient) { }

getCredits(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.apiUrl);
}
}
