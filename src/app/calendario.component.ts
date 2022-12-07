import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  

  ngOnInit(){
    this.construirCalendario();
    console.table(this.diasCalendario)
  }

  construirCalendario(){
  
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 0 //domingo
    const ultimoDiaDaSemana = 6 // Sábado

    // vai subtraindo -1 até chegarmos no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while(dataInicial.getDay() !== primeiroDiaDaSemana){
      dataInicial.setDate(dataInicial.getDate() -1);
    }

    // Vai somando +1 até chegarmos no ultimo dia da semana
    const dataFinal = new Date(ano, mes +1, 0);
    while(dataFinal.getDay() !== ultimoDiaDaSemana){
      dataFinal.setDate(dataFinal.getDate() +1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ){
      this.diasCalendario.push(new Date(data.getDate()));
    }
    
  }
  
}
