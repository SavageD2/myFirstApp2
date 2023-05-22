import { Component } from '@angular/core';
import { Onomatopoeia } from './models/onomatopoeia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Savage';

  onomatopoeiaList: string[] = [];

  onReceiveOnomatopoeia(newWords: string):void {
    this.onomatopoeiaList.push(newWords);
    console.log("parent" , this.onomatopoeiaList);
    console.log(newWords);
    
  }
}
