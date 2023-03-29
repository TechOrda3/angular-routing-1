import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child-a',
  template: `
    <p>
      first-child-a works!
    </p>
  `,
  styles: [
  ]
})
export class FirstChildAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
