import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User(
    '',
    'Vergil',
    40,
    '',
    'https://media.tenor.com/knsB1wfSPVAAAAAM/vergil-son-of-sparda.gif'
  );

    showAge: boolean = false;
    button: string = 'Show Age';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAge() {
    this.showAge =!this.showAge;

    if (this.showAge) {
      this.button = 'Hide Age';
    } else {
      this.button = 'Show Age';
    }
  }
}
