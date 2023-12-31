import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  enteredText: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onBtnClicked() {
    // console.log(this.enteredText)
    this.dataService.raiseDataEmitterEvent(this.enteredText);
  }

}
