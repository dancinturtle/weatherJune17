import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit, OnDestroy {
  temp: string;
  sub: Subscription;
  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this._route.params.subscribe( params => {
      this.temp = params.temp;
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
