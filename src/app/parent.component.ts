import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div>
      <h1>Counter Value: {{this.counter}}</h1>
      <input type="button" (click)="this.updateCounter()" value="Update Counter" />
      <child-component></child-component>
      </div>
  `  
})
export class ParentComponent {
  counter = 0;

  updateCounter() {
      this.counter += 1;
  }
}
