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
      src:"https://upload.wikimedia.org/wikipedia/ca/3/3e/Crash_Bandicoot_3_Warped_Original_Box_Art.jpg",
      alt: "CB3"
    },
    {
      src:"https://m.media-amazon.com/images/I/51KXBNSFJ1L._AC_SX466_.jpg",
      alt: "Tenchu"
    },
    {
      src:"https://m.media-amazon.com/images/I/61KPFN43GSL.jpg",
      alt: "Vagrant"
    },
    {
      src:"https://static.wikia.nocookie.net/esfinalfantasy/images/4/40/Portada_FFVII_PSX_E.jpg",
      alt: "FFVII"
    },
    {
      src:"https://as01.epimg.net/meristation/imagenes/2015/04/30/reportaje/1430373600_448371_1532453664_sumario_normal.png",
      alt: "Silent"
    },
    {
      src:"https://upload.wikimedia.org/wikipedia/en/a/ab/Abe%27s_Oddysee_Cover.jpg",
      alt: "Abe"
    }]
   }
  
  



  
}
