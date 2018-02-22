import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit , OnDestroy{
  numobssub:Subscription;
  custobssub:Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber=Observable.interval(1000).map((data:number)=>{
      return data*2;
    })
    this.numobssub=myNumber.subscribe(
      (number:number)=>{
        console.log(number);
      }
    )

    const myobservable=Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
          observer.next('first');
      },2000);
      setTimeout(()=>{
        observer.next('second');
      },4000);
      setTimeout(()=>{
        observer.complete();
      },5000);
      setTimeout(()=>{
        observer.next('third');
      },6000);
    })
    this.custobssub=myobservable.subscribe(
      (data:string)=>{
      console.log(data);
    },
      (error:string)=>{
        console.log(error);
      },
      ()=>{
        console.log('completed');
      },
      )
  }
  ngOnDestroy(){
    this.custobssub.unsubscribe();
    this.numobssub.unsubscribe();
  }

}
