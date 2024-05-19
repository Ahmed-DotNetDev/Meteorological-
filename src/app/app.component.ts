import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherservice: WeatherService) {
    console.log("test on init");

  }
  cityname?: string = "London";
  tempovar?: WeatherService | any;
  ngOnInit(): void {
    this.getWeatherData(this.cityname);
  }
  getWeatherData(city: string | any) {
    this.weatherservice.getWeatherData(city)
      .subscribe({
        next: (response) => {
          this.tempovar = response;

          console.log(response.main.temp);

        },
        error: (p) => {
          console.log(p);
        }
      })
  }
  submit() {
    this.getWeatherData(this.cityname)
  }

}
