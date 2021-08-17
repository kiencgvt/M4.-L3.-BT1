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
    if (this.numberOne != '0' && this.operator == '/' && this.numberTwo == '0') {
      if (+this.numberOne > 0) {
        return 'Dương vô cùng';
      }
      else {
        return 'Âm vô cùng';
      }
    }
    return eval(this.numberOne + this.operator + this.numberTwo);
  }
}
