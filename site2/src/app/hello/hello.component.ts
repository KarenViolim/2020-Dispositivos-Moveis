import { Component } from '@angular/core';

@Component({
  selector: 'hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  disciplina : string ="POO";
  soma : number = 0;
  nome : string = "";
  ano : number = 0;


  constructor(){
    this.disciplina = "DDM";
    this.soma = this.calcular(5,5);
  }

  calcular(num1 : number, num2 : number) : number {
  	let total = 0;
  	total = num1 + num2;
  	return total;
  }

  subtrair() : void{

  }

  hello() : void{
    alert("Hello World "+ this.nome);
  }
  calcularIdade() : void{
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - this.ano;
    alert("Olá " + this.nome +" sua idade é: "+ idade+" anos");
  }
}
