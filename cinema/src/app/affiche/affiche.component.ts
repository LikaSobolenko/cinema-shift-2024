import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../interfaces.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.scss'] // исправлено свойство для стилей
})
export class AfficheComponent implements OnInit { // добавлен интерфейс OnInit
  public data: Movie[] = [];

  constructor(
    private dataService: DataService,
    private router: Router
    ) {}

  ngOnInit() {
    const response = this.dataService.getMoviesList();
    response.subscribe(
      (result: any) => {this.data = result.films}
    );
  }

  navigateToMovie(id:string) {
    this.router.navigate(['/movie', id]);
  }
}
