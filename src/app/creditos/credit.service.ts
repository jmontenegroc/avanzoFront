import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from './credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

private apiUrl: string =  ''+'/api/clients/credits/all';

constructor(private http:HttpClient) { }

getCredits(): Observable<Credit[]> {
  return this.http.get<Credit[]>(this.apiUrl);
}
}
