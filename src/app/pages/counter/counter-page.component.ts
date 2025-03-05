


import { Component } from '@angular/core';

@Component({
  templateUrl:'counter-page-component.html'

})

export class CounterPagesComponent {
  counter = 10
  increaseBy(value:number){
    this.counter+= value
  }

  decreaseBy(value:number){
    this.counter-=value;
  }
  resetCounter(){
    this.counter = this.counter;
  }

}
