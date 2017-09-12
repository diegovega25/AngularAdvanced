import { Component, OnInit } from '@angular/core';
import { ChildModel } from './child/child.model'
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  childs: ChildModel[] = []

  ngOnInit(){
    let obs = Observable
    .interval(1000)
    .take(10)
    .map((v) => Date.now())

    obs.subscribe(value => console.log("Subscriber: " + value));
  }
  addChild(){
    this.childs.unshift(new ChildModel('Justin', 'Castillo'))
  }
  deleteChild(){
    this.childs = []
  }
  
}
