import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { UserComponent } from './page/user/user.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { RoomComponent } from './page/room/room.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'u/:nickname', component: UserComponent }, 
  { path: 'c/:nickname', component: ContactsComponent },  
  { path: 'r/:id', component: RoomComponent },         
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    ContactsComponent,
    RoomComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    SimplebarAngularModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
