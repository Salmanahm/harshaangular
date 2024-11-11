import { Component } from '@angular/core';

// @Component is a decorator, which tells that this class is a component not an ordinary class
// selector represents the tag using which the component is invoked

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
