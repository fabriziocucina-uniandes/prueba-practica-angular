import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPlantaComponent } from './listar-planta.component';
import { PlantaService } from '../../services/planta.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Planta } from '../../models/planta.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let plantaService: PlantaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListarPlantaComponent],
      providers: [PlantaService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the table with three rows', () => {

    const mockPlantas: Planta[] = [
      new Planta(1, "Lengua de vaca", "Sansevieria Trifasciata", "Interior", 140, "Templado, cálido", "Tierra orgánica con buen drenaje"),
      new Planta(2, "Chachafruto", "Schefflera actinophylla", "Exterior", 1000, "Todos", "Sustrato para huerto"),
      new Planta(3, "Pothos", "Epipremnum aureum", "Interior", 300, "Tropical", "Tierra con buen drenaje")
    ];

    spyOn(plantaService, 'getPlants').and.returnValue(of(mockPlantas));

    component.getPlants();
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
