import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';

@Component({
  selector: 'app-second-child-a',
  templateUrl: './second-child-a.component.html',
  styleUrls: ['./second-child-a.component.scss']
})
export class SecondChildAComponent implements OnInit {
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('slug');

    // iphone-6 slug slug slug slug slug slug slug

    this.route.paramMap.pipe(
      map(p => p.get('slug'))
    ).subscribe({
      next: value => {
        console.log(value)
      }
    });

    this.route.queryParamMap.subscribe({
      next: value => {
        console.log(value.get('page'), value.get('size'))
      }
    })
  }

}
