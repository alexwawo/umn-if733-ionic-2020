import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line:variable-name
  private _places: Place[] = [
    new Place(
        'p1',
        'UMN Apartment',
        'Apartment for UMN Students',
        'https://inhabitat.com/wp-content/blogs.dir/1/files/2015/08/Park-and-Garden-Luxury-Apartments.jpg',
        500000
    ),
    new Place(
        'p2',
        'Serpong Apartment',
        'Apartment for Everyone',
        'http://1.bp.blogspot.com/_blHhVE1ARAY/S64XHDckw6I/AAAAAAAAAAk/Y9UTOYSeBc4/s1600/apartment4.jpg',
        700000
    ),
    new Place(
        'p3',
        'JKT Apartment',
        'Apartment for The Prime',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/American_Apartment_Building_-_Portland_Oregon.jpg/1200px-American_Apartment_Building_-_Portland_Oregon.jpg',
        800000
    ),
  ];
  constructor() { }

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
