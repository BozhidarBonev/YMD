import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'services', component: ServicesComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    enableTracing: true,
    onSameUrlNavigation: "reload",
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
