import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ci-cd-practice';
  private myBadVariable = 'test';

  /**
   *
   */
  constructor() {
    this.someunusedMethod();
  }

  someunusedMethod(): void {
    // console.log(log);
  }
}
