import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from '@angular/core';
import { ChildModel } from './child.model'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('child') data: ChildModel

  constructor() {
    console.log(`Nuevos datos(constructor): ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`Datos (ngOnChanges) ${this.data}`);

    for (let key in changes) {
      console.log(`${key} cambio de datos:
        Actual: ${changes[key].currentValue}.
        Previo: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    console.log(`Datos (ngOnInit) ${this.data}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
