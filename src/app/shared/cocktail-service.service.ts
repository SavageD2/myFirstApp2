import { Injectable } from '@angular/core';
import { CocktailsComponent } from '../cocktails/cocktails.component';
import { Cocktail } from '../models/cocktail.model';


@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor() { }

  getCocktails(): Cocktail[] {
      return [{
        name: 'Chartreuse Swizzle',
        picture: 'https://cdn.diffords.com/contrib/stock-images/2016/7/45/201638ad9c7ca9245906697eaa0a7ea1cb67.jpg',
        price: 37.99,
      },
      {
        name: 'In The August Sun',
        picture: 'https://cdn.diffords.com/contrib/stock-images/2020/08/5f2d7b7bf1a0d.jpg',
        price: 37.52,
      },
      {
        name: 'Calvados Fruit Cup',
        picture: 'https://cdn.diffords.com/contrib/stock-images/2018/05/5af301972729a.jpg',
        price: 46.66,
      }
    ]
    }

}
