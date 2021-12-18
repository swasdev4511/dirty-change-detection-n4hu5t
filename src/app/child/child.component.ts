import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <div><h3>{{this.executeFunction()}}</h3></div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  executeFunction() {
    console.log('App Rerendered');
    return 'This is Child Component';
  }
}
