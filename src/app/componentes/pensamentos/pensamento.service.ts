import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { IPensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private httpClient: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<IPensamento[]> {
    const itensPorPagina = 2

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

      if (filtro.trim().length > 3)
        params = params.set("q", filtro)

    return this.httpClient.get<IPensamento[]>(this.API, { params });
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.httpClient.post<IPensamento>(this.API, pensamento)
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    const URL = `${this.API}/${pensamento.id}`
    return this.httpClient.put<IPensamento>(URL, pensamento)
  }

  mudarFavorito(pensamento: IPensamento): Observable<IPensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
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
