import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnInit, OnDestroy {
  windSpeed: string;
  sub: Subscription;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.windSpeed = params.wind;
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
