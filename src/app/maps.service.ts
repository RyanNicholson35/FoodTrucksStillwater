import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDirection } from '@angular/common';


interface Location{
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }


getLocation() {
  return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=63b61524100a1bff0aa19272cbebe4d7')
}

}

