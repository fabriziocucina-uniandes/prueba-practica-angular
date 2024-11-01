import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../../services/planta.service';
import { Planta } from '../../models/planta.model';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {
  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlants()
  }

  getPlants(): void {
    this.plantaService.getPlants().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  getPlantsByType(tipo : string): number { 
    return this.plantas.filter( planta => planta.tipo === tipo).length
  }
}
