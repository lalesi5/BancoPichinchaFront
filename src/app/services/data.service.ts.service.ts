import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

//Obtener Pokemons
  getPokemons() {
    return this.http.get('https://pokemon-pichincha.herokuapp.com/pokemons/');
  }
}
