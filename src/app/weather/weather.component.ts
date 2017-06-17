import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _http: HttpService, private _router: Router) { }
  weatherData: object
  errormessage: string

  ngOnInit() {
   

  }

  getUserZipInfo(zip){
    console.log("user's zip!", zip);
    this._http.fetchWeather(zip)
    .then(
      data => { 
        this.errormessage = null;
        this.weatherData = data;
        this._router.navigate(['/weather/wind/',data.wind.speed])
        console.log('success ', data)}
    )
    .catch(
      err => { 
        this.weatherData = null;
        this.errormessage = "Invalid zipcode";
        console.log('error found', err)}
    )
  }

}
