import { Component, Input } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }
}
