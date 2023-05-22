import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  dev: Developer = new Developer('Vandal','Savage',2000,'male','immortal',[
    new Skill('JavaScript',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
    'https://www.google.com/search?q=javascript'),
    new Skill('HTML',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png',
    'https://www.google.com/search?q=html'),
    new Skill('CSS',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
    'https://www.google.com/search?q=css'),
    new Skill('React',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    'https://www.google.com/search?q=react'),
    new Skill('Angular',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
    'https://www.google.com/search?q=angular')
  ]);

  
  constructor() { }

  ngOnInit(): void {
  }

 

}
