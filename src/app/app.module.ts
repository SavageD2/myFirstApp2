import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { CreateOnomatopoeiaComponent } from './create-onomatopoeia/create-onomatopoeia.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    MenuComponent,
    UserComponent,
    SignUpComponent,
    DeveloperComponent,
    SkillComponent,
    CreateOnomatopoeiaComponent,
    CocktailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
