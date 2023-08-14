import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  url: string = "https://github.com/PabloJesusdaSilva";
  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";

  public getCalc () {
    return 1;
  }

  public clickBtn () {
    alert("Teste botão!");
  }

  public onKeyUp (event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  public onMouseOverOut () {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
  constructor () {}

  ngOnInit(): void {}
}
