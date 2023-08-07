import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { map , filter } from "rxjs/operators";
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'angularobservable';

  constructor(private dataService: DataService) {}

  //USING OBSERVABLE CONSTRUCTOR

  // myObservable = new Observable((observer) => {
  //   console.log('Observable Starts')
  //   setTimeout(() => {
  //     observer.next('1')}, 1000);
  //   setTimeout(() => {
  //     observer.next('2')}, 2000);
  //   setTimeout(() => {
  //     observer.next('3')}, 3000);
  //   setTimeout(() => {
  //     observer.error(new Error('Something went wrong! Please try again later'))}, 3000);  
  //   setTimeout(() => {
  //     observer.next('4')}, 4000);
  //   setTimeout(() => {
  //     observer.next('5')}, 5000);
  //   setTimeout(() => {
  //     observer.complete()}, 3000);      
  //   // observer.next('1')
  //   // observer.next('2')
  //   // observer.next('3')
  //   // observer.next('4')
  //   // observer.next('5')
  // })


  //USING CREATE METHOD

  // myObservable = Observable.create((observer: any) => {
  //   console.log('Observable Starts')
  //   setTimeout(() => {
  //     observer.next('A')}, 1000);
  //   setTimeout(() => {
  //     observer.next('B')}, 2000);
  //   setTimeout(() => {
  //     observer.next('C')}, 3000);
  //   setTimeout(() => {
  //     observer.next('D')}, 4000);
  //   setTimeout(() => {
  //     observer.next('E')}, 5000);
  // })


  // USING OF OPERATOR

  array1 = [1,3,4,6,7];
  array2 = ['A','B','C','D','E']

  // myObservable = of(this.array1,this.array2,20,35,'hello')

  // USING FROM OPERATOR

  // myObservable = from(this.array1) // 1,3,4,6,7,=> 5,15,20,30,37

  // transformedmyObs = this.myObservable.pipe(map((val) => {
  //   return val*5;
  // }),filter((val) => {
  //   return val > 20;
  // }))

  // filteredmyObs = this.transformedmyObs.pipe(filter((val) => {
  //   return val > 20;
  // })) 

  //from operator takes only one parameter and that should be an iterable , also we can pass any promise

  //from and of operators give complete message on end

  ngOnInit() {
    // this.myObservable.subscribe((val: any) =>{
    //   console.log(val)
    // }, (error: any) => {
    //   alert(error.message);
    // }, () => {
    //   alert('Observable has completed emitting all values.')
    // })
  }

  counterObs = interval(1000);

  counterSub: any;

  unsubscribeObs() {
    this.counterSub.unsubscribe();
  }

  subscribeObs() {
    this.counterSub = this.counterObs.subscribe((val) => {
      console.log(val);
    })
  }

}

