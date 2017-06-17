import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {
  sky: string;
  temp: Subscription;
  constructor(private _sky: ActivatedRoute) { }

  ngOnInit() {
    this.temp = this._sky.params.subscribe(response =>{
      this.sky = response.color;
    });
  }

}
