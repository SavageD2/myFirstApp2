import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  blockLetters: string = 'ABC'

  constructor() { }

  ngOnInit(): void {
  }

}
