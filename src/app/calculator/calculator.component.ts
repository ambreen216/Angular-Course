import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  input:string = '';
  result:string = '';

  ngOnInit(): void {
  }

// calculator
  pressOperator(op: string) {
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }

    this.input = this.input + op
    this.calAnswer();

  }

  pressNum(num: string) {

    this.input=this.input + num;
    this.calAnswer();

  }

  allClear() {
    this.result = '';
    this.input = '';
  }

calAnswer() {
    let formula= this.input;
    console.log("formula" +formula)
    this.result=eval(formula);
  }

  getAnswer() {

    this.calAnswer()
    this.input=this.result;
    if (this.input=="0") this.input="";
  }

}
