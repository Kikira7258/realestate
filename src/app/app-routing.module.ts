import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/client-view/home/home.component';
import { AboutComponent } from './views/client-view/about/about.component';
import { FaqComponent } from './views/client-view/faq/faq.component';
import { ContactComponent } from './views/client-view/contact/contact.component';
import { ListingsComponent } from './views/client-view/listings/listings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'faqs', component: FaqComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'listings', component: ListingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
