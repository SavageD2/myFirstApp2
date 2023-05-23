import { Injectable } from '@angular/core';
import { CocktailsComponent } from '../cocktails/cocktails.component';
import { Cocktail } from '../models/cocktail.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(public http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
      return this.http.get<Cocktail[]>("assets/cocktails.json");
    }
    
}
