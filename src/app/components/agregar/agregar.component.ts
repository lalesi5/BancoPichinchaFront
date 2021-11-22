import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service.ts.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  pokemons: any[] = [];
  // @ts-ignore
  colectorInfo: Pokemon = {};

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        this.pokemons = response;
        console.log(this.pokemons);
      })
  }

/*
  randomCoding(){

    var arr = ['water','fire','normal','bug','poison'];
    var idvalue ='';
    let n = 4;
    for(var i=0;i<n;i++){
      idvalue+=arr[Math.floor(Math.random()*5)];
    }
    return idvalue;
  }
*/


  onSubmit() {
    if (confirm('Desea agregar el elemento')) {
      this.colectorInfo.idAuthor = 2;
      this.colectorInfo.hp = Math.floor(Math.random() * (100 - 1) + 1);
      this.colectorInfo.type = 'fire';
      console.log(this.colectorInfo);
      this.dataService.addPokemons(this.colectorInfo)
        .subscribe((response: any) => {
          console.log(response);
        })
    }
  }
}
