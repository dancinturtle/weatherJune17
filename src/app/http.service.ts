import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  fetchWeather(zip) {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=5a153b04e7a5e65a0baf429af7d5c0cb").map(response=>response.json()).toPromise()
  }

}
