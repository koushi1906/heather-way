import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FloorplansComponent } from './floorplans/floorplans.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:"home" ,component:HomeComponent,canActivate:[authGuard]},
  {path:"about" ,component:AboutComponent, canActivate:[authGuard]},
  {path:"floor" ,component:FloorplansComponent, canActivate:[authGuard]},
  {path:"gallery", component:GalleryComponent, canActivate:[authGuard]},
  {path:"register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
