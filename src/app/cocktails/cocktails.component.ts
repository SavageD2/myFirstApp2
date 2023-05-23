import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../shared/cocktail-service.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  public cocktails: Cocktail[]= [];
  
  constructor(public cocktailsService: CocktailServiceService) { }

  ngOnInit(): void {
    this.cocktailsService.getCocktails().subscribe(cocktailsData => {
      this.cocktails = cocktailsData;
    });
  }

}
