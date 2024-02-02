import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheComponent } from './affiche/affiche.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: 'afisha', component: AfficheComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', redirectTo: '/afisha', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}