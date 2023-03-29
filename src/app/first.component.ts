import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <a routerLink="./login">Login</a>
    <a routerLink="./register">Register</a>

    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
