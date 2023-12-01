import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/pages/main/main.component';
import { TheaterComponent } from 'src/pages/theater/theater.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'theater', component: TheaterComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
