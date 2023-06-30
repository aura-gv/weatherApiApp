import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeather() {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Biratnagar&appid=d7778f84fb2d11ba2eabbb2a252ff484'
    );
  }
}
// gg
