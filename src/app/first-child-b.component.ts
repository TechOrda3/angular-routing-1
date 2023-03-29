import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child-b',
  template: `
    <p>
      first-child-b works!
    </p>
  `,
  styles: [
  ]
})
export class FirstChildBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
