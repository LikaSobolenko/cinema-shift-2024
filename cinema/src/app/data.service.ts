import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getMoviesList(){
    return this.http.get('https://shift-backend.onrender.com/cinema/today')
  }

  getMovie(id:string){    
    return this.http.get(`https://shift-backend.onrender.com/cinema/film/${id}`)
  }

  getMovieSchedules(id:string){    
    return this.http.get(`https://shift-backend.onrender.com/cinema/film/${id}/schedule`)
  }


}
