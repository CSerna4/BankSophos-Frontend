import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from './clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  private URL="http://localhost:8080/v0/api/clients"

  constructor(private httpClient : HttpClient) { }

  getClients(): Observable<Clients[]>{
    return this.httpClient.get<Clients[]>(`${this.URL}`);
  }
}
