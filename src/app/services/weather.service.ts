import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { WeatherData } from '../Models/WeatherModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<WeatherData> {
 //   const url = `${environment.weatherBaseapi}/city/${city}/EN`;//Egypt
    return this.http.get<WeatherData>('', {
      headers: new HttpHeaders()
       // .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
       // .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
    });
  }
}
