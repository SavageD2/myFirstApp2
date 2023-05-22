import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Onomatopoeia } from '../models/onomatopoeia.model';

@Component({
  selector: 'app-create-onomatopoeia',
  templateUrl: './create-onomatopoeia.component.html',
  styleUrls: ['./create-onomatopoeia.component.css']
})
export class CreateOnomatopoeiaComponent implements OnInit {

  newOnomatopoeia: string = '';

  @Output() sendOnomatopoeiaToParent: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  createOnomatopoeia():void {
    console.log("enfant" +this.newOnomatopoeia);
    this.sendOnomatopoeiaToParent.emit(this.newOnomatopoeia);
   
  }
}
