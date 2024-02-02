import { Component } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { DataService } from '../data.service';
import { Movie, Schedules } from '../interfaces.models';

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
  public stars = [false, false, false, false, false]
  public isLoaded = false;
  public seances: any = [];
  public hallTime: any = [];
  public selectedDate: any = [];
  public places: any = [];
  public screenLenght: number = 0;
  selectedHall: string | null = null;
  public halls = ['Red', 'Green', 'Blue']

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      if(this.movieId){
        const response = this.dataService.getMovie(this.movieId);
        response.subscribe(
          (result: any) => {
            if(result) this.data = result.film
            if(this.data.ageRating === 'R') this.data.ageRating = '16+'
            else this.data.ageRating = '18+';
            let rating = Math.round(+(this.data.userRatings.kinopoisk) / 2)
            for (let i = 0; i < rating; i++) {this.stars[i]=true}
            this.isLoaded = true;
          }
        );
        const schedules = this.dataService.getMovieSchedules(this.movieId);
        schedules.subscribe(
          (result: any) => {
            if(result) this.schedule = result.schedules
          }
        );
      }      
    });
  }

  onSelectionDate(selectedDate: string): void {
    this.selectedHall = '';
    this.hallTime = [];
    this.places = [];
    this.screenLenght = 0;
    this.selectedDate = this.schedule.find(obj => obj.date === selectedDate);
  }

  onSelectionTime(selectedHall: string): void {
    this.selectedHall = selectedHall;
    this.seances = this.selectedDate.seances;
    this.hallTime = [];
    this.places = [];
    this.screenLenght = 0;
    this.seances.forEach((el: any)  => {
      if(el.hall.name === this.selectedHall) {
        this.hallTime.push(el.time)
      }
    })
  }
  onSelectionChairs(selectedTime: string): void {
    this.places = [];
    const seance = this.seances.find((obj: any) => obj.time === selectedTime && obj.hall.name === this.selectedHall);
    this.places = seance.hall.places;
    this.screenLenght = this.places[0].length

  }

  toAffichePage() {    
    this.router.navigate(['/afisha']);
  }

}
