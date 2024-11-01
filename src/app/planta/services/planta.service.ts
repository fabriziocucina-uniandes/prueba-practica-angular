import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from '../models/planta.model';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Planta[]> {
      return this.http.get<Planta[]>(environment.url);
  }
}
