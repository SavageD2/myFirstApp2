import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/sign-up/sign-up.component';

import { UserProfileComponent } from 'src/user-profile/user-profile.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: '', redirectTo:'/user', pathMatch:'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'dev', component: DeveloperComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
