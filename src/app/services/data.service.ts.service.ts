import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlAPI = 'https://pokemon-pichincha.herokuapp.com/pokemons/';
  private urlAPIName = 'https://pokemon-pichincha.herokuapp.com/pokemons/?name=';

  constructor(
    private http: HttpClient
  ) {
  }

//Obtener Pokemons
  getPokemons() {
    return this.http.get<Pokemon>(this.urlAPI);
  }

  addPokemons(pokemon: Pokemon){
    return this.http.post<Pokemon>(this.urlAPI, pokemon);
  }

  deletePokemons(id: any){
    this.urlAPI = `${this.urlAPI}${id}`;
    return this.http.delete(this.urlAPI);
  }

  getPokemonsName(name: any) {
    this.urlAPIName = `${this.urlAPIName}${name}`;
    return this.http.get<Pokemon>(this.urlAPIName);
  }

}
