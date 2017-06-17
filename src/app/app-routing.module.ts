import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component'; 
import { SkyComponent } from './sky/sky.component'; 
import { WindComponent } from './wind/wind.component'; 
import { TempComponent } from './temp/temp.component'; 

const routes: Routes = [
  {
    path: 'weather', component: WeatherComponent, children: [
      {path: 'wind/:wind', component: WindComponent},
      {path: 'temp/:temp', component: TempComponent},
      {path: 'sky/:color', component: SkyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
