import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <a routerLink="/second/1234" [queryParams]="{ page: 1, size: 10 }" fragment="test">Детали товара</a>
    <a (click)="goto()">Детали товара</a>

    <router-outlet></router-outlet>
  `,
  styles: [

  ]
})
export class SecondComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute)

  constructor() { }

  ngOnInit(): void {
  }

  goto() {
    this.router.navigate(['.', 123445], { queryParams: {  page: 10, size: 5 }, relativeTo: this.route })
  }
}
