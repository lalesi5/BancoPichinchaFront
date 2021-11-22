import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service.ts.service";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pokemons: any[] = [];

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

}
