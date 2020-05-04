import { Component } from '@angular/core';
import {MapsService} from './maps.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lat: number = 36.121930;
  lng: number = -97.064130;
  zoom: number = 15;



  markers: marker[] = [
    {
      name:'Nilimas',
      lat: 36.1236121,
      lng:  -97.0630751,
      draggable: false,
      address: '140 N Duck St, Stillwater, OK 74075'
    },
    {
      name:'Cafe Bella',
      lat:  36.115980,
      lng:  -97.063130,
      draggable: false,
      address: '516 S Duck St, Stillwater, OK 74074'
    },
    {
      name:'Spot On Mobile Kitchen',
      lat:  36.124520,
      lng:  -97.062460,
      draggable: false,
      address: '227 N Duck St, Stillwater, OK 74075'
    },
    {
      name: 'Purdy-Q',
      lat: 36.118000,
      lng: -97.060020,
      draggable: false,
      address: '519 S Husband St, Stillwater, OK 74074'
    }
  ];

constructor(){}


}

interface marker{
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;
  address:string;
}


