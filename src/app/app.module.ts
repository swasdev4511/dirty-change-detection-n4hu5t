import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ParentComponent } from './parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ ParentComponent, ChildComponent ],
  bootstrap:    [ ParentComponent ],
})
export class AppModule { }
