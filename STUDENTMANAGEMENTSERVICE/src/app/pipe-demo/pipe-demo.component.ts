import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  player = {
    "name":"Kohali",
    "BaseSalary":100000,
    "JoinedOn":Date.now(),
    "Qulaification":"B.tech",
    "WinningPercentage":65.5/100,
    "About":"Virat Kohli is an Indian international cricketer and former captain of india"
     
  }

  constructor() { }

  ngOnInit(): void {
  }

}
