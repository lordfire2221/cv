import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

///
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'
import {provideStorage,getStorage} from '@angular/fire/storage'
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { PortofioliComponent } from './portofioli/portofioli.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { EdicationComponent } from './edication/edication.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    NavComponent,
    PortofioliComponent,
    FooterComponent,
    ContactComponent,
    CopyrightComponent,
    FourOhFourComponent,
    SidebarComponent,
    ServicesComponent,
    ExperienceComponent,
    EdicationComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    RouterLinkActive,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
