import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/sign-up/sign-up.component';

import { UserProfileComponent } from 'src/user-profile/user-profile.component';
import { DeveloperComponent } from './developer/developer.component';
import { CocktailsComponent } from './cocktails/cocktails.component';

const routes: Routes = [
  { path: '', redirectTo:'/user', pathMatch:'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'dev', component: DeveloperComponent },
  { path: 'cocktails', component: CocktailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
