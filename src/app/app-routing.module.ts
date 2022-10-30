import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PortofioliComponent } from './portofioli/portofioli.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'copyright',component:CopyrightComponent},
  {path:'header',component:HeaderComponent},
  {path:'contact',component:ContactComponent},
  {path:'nav',component:NavComponent},
  {path:'portofioli',component:PortofioliComponent},
  {path:'about',component:AboutComponent},
  {path:'four-oh-four',component:FourOhFourComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
