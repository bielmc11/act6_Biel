import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'usuario/:id', component: ViewUserComponent},
  {path: 'newuser', component: FormComponent },
  {path: 'updateuser/:id', component: FormComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
