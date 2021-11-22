import {Component, OnInit, Input} from '@angular/core';
import {DataService} from "../../services/data.service.ts.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  selectedPokemon: string = '';
  pokemons: any[] = [];

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }


  onSearch() {
  console.log(this.selectedPokemon);
    this.dataService.getPokemonsName(this.selectedPokemon)
      .subscribe((response:any)=>{
        this.pokemons = response;
  })
  }

  onDelete(id: any) {

    if (confirm('Desea eliminar el elemento')) {
      this.dataService.deletePokemons(id)
        .subscribe((responseDel: any) => {
          console.log(responseDel);
        })
    }

  }


}
