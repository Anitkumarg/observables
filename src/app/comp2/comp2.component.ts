import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  inputText: string = ''; 

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.dataEvent.subscribe((value) =>{
      this.inputText = value;
    })
  }

}
