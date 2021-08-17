import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  operatorArray:string [] = ['+', '-', '*', '/'];
  numberOne:string = '0';
  numberTwo:string = '0';
  operator:string = '+'
  showResult() {
    return eval(this.numberOne + this.operator + this.numberTwo);
  }
}
