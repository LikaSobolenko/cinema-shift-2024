import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Movie, Schedules } from '../interfaces.models';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  longText = 'Film'
  public movieId: string | null = null;
  public data: Movie = {} as Movie;
  public schedule: Schedules[] = [];
  selectedDate: string | null = null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      if(this.movieId){
        const response = this.dataService.getMovie(this.movieId);
        response.subscribe(
          (result: any) => {
            if(result) this.data = result.film
            console.log(this.data)
          }
        );
        const schedules = this.dataService.getMovieSchedules(this.movieId);
        schedules.subscribe(
          (result: any) => {
            if(result) this.schedule = result.schedules
            console.log(this.schedule)
          }
        );
      }      
    });
  }

  onSelectionChange(selectedDate: string): void {
    this.selectedDate = selectedDate;
    console.log('Selected Date:', this.selectedDate);
  }
}
