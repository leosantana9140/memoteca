import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<IPensamento[]> {
    return this.httpClient.get<IPensamento[]>(this.API);
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.httpClient.post<IPensamento>(this.API, pensamento)
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    const URL = `${this.API}/${pensamento.id}`
    return this.httpClient.put<IPensamento>(URL, pensamento)
  }

  excluir(id: number): Observable<IPensamento> {
    const URL = `${this.API}/${id}`
    return this.httpClient.delete<IPensamento>(URL)
  }

  buscarPorId(id: number): Observable<IPensamento> {
    const URL = `${this.API}/${id}`
    return this.httpClient.get<IPensamento>(URL)
  }
}
