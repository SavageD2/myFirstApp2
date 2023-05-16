import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  title: string = 'Bonjour !';
  isAdmin: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleTitle() {
    if (this.isAdmin === true) {
      this.isAdmin = false;
    } else {
      this.isAdmin = true;
    }
  }
}
