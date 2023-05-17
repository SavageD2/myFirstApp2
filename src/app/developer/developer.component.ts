import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  dev: Developer = new Developer('Vandal','Savage',2000,'male','immortal',[new Skill(
    'html',
    'css',
    'javascript'
  )]);

  constructor() { }

  ngOnInit(): void {
  }

}
