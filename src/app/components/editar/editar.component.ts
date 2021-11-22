import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service.ts.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pokemons: any[] = [];
  // @ts-ignore
  colectorInfo: Pokemon = {};
  // @ts-ignore
  datosEdit: Pokemon ={};

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

  onSubmit() {
    if (confirm('Desea agregar el elemento')) {
      this.colectorInfo.idAuthor = 2;
      this.colectorInfo.hp = Math.floor(Math.random() * (100 - 1) + 1);
      this.colectorInfo.type = 'fire';
      this.colectorInfo.id = this.datosEdit.id;
      console.log(this.colectorInfo);
      this.dataService.putPokemons(this.colectorInfo)
        .subscribe((response: any) => {
          console.log(response);
        })
    }
  }

  onEdit(pokemonEdit: any){
      console.log(pokemonEdit);
      this.datosEdit = pokemonEdit;

  }

}
