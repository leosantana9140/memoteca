import { Component } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento: IPensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Leonardo Santana',
    modelo: 'modelo1'
  }

  criarPensamento() {
    alert('Novo pensamento criado!')
  }

  cancelar() {
    alert('Ação cancelada!')
  }
}
