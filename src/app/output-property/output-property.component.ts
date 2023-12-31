import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: true }) campoValorInput: any;

  incrementar() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor})
  }
  
  decrementar() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor () {}

  ngOnInit(): void {
    
  }
}
