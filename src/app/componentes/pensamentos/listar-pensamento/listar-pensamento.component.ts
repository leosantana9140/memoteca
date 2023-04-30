import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  pensamentos: IPensamento[] = []
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true
  filtro: string = ''
  favorito: boolean = false
  listaFavoritos: IPensamento[] = []
  titulo: string = 'Listar todos pensamentos'

  constructor(private pensamentoService: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaPensamentos) => {
      this.pensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe((listaPensamentos) => {
      this.pensamentos.push(...listaPensamentos)
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1
    this.haMaisPensamentos = true
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaPensamentos) => {
      this.pensamentos = listaPensamentos
    })
  }

  listarFavoritos() {
    this.paginaAtual = 1
    this.haMaisPensamentos = true
    this.favorito = true
    this.titulo = 'Meus favoritos'
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaPensamentos) => {
      this.pensamentos = listaPensamentos
      this.listaFavoritos = listaPensamentos
    })
  }

  recarregarComponente() {
    this.paginaAtual = 1
    this.favorito = false
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}
