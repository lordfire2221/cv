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
import { About1Component } from './about1/about1.component';
import { Service1Component } from './service1/service1.component';
import { ResumeComponent } from './resume/resume.component';
import { Contact1Component } from './contact1/contact1.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'copyright',component:CopyrightComponent},
  {path:'header',component:HeaderComponent},
  {path:'contact',component:Contact1Component},
  {path:'nav',component:NavComponent},
  {path:'portofioli',component:PortofioliComponent},
  {path:'about',component:AboutComponent},
  {path:'four-oh-four',component:FourOhFourComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'a-propos',component:About1Component},
  {path:'service',component:Service1Component},
  {path:'resume',component:ResumeComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
