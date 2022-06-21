import { Component } from '@angular/core';
import { MoviesInterface } from './models/films.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public horrormovies: MoviesInterface = {
    title: "Horror Movies",
    gallery: [{
      src:"https://cdn.mos.cms.futurecdn.net/o3Huwi7H8UFE4tQLXXRLqc.jpg",
      alt: "Scream"
    },
    {
      src:"https://media.diariolasamericas.com/p/b5603635b535cac87b238874a2c4328b/adjuntos/216/imagenes/002/305/0002305389/a-quiet-place-part-ap.jpg",
      alt: "Quiet Place"
    },
    {
      src:"https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2080,w_3200/https%3A%2F%2Fnetflixlife.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F03%2F1347832564.jpeg",
      alt: "Exhorcism"
    },
    {
      src:"https://creepycatalog.com/wp-content/uploads/sites/2/2022/02/student_body_2022_killer_in_the_hallway.jpg?w=768",
      alt: "Creepy"
    },
    {
      src:"https://www.slashfilm.com/img/gallery/the-horror-movies-we-cant-wait-to-see-in-2022/scream-1641937103.jpg",
      alt: "Knife"
    },
    {
      src:"https://i.ytimg.com/vi/3eGP6im8AZA/maxresdefault.jpg",
      alt: "Black Phone"
    }]
   }


   public popularmovies: MoviesInterface = {
    title: "Popular On Netflix",
    gallery: [{
      src:"./assets/images/trend/7.png",
      alt: "7"
    },
    {
      src:"./assets/images/trend/8.png",
      alt: "8"
    },
    {
      src:"./assets/images/trend/9.png",
      alt: "9"
    },
    {
      src:"./assets/images/trend/10.png",
      alt: "10"
    },
    {
      src:"./assets/images/trend/11.png",
      alt: "11"
    },
    {
      src:"./assets/images/trend/12.png",
      alt: "12"
    }]
   }
  
  

   public trendingnow: MoviesInterface = {
    title: "Trending Now",
    gallery: [{
      src:"./assets/images/trend/1.png",
      alt: "1"
    },
    {
      src:"./assets/images/trend/2.png",
      alt: "2"
    },
    {
      src:"./assets/images/trend/3.png",
      alt: "3"
    },
    {
      src:"./assets/images/trend/4.png",
      alt: "4"
    },
    {
      src:"./assets/images/trend/5.png",
      alt: "5"
    },
    {
      src:"./assets/images/trend/6.png",
      alt: "6"
    }]
   }


  
}
