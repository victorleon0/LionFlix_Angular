import { HeroInterface } from './../../models/films.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public principalHome : HeroInterface

  constructor() { 
    this.principalHome = {
      title: 'JURASSIC WORLD - Dominion',
      gallery: {
        src: '../../assets/images/Video/JURASSIC.mp4',
        alt: "Trailer"
      },
      play: {
        src: 'https://pixsector.com/cache/0d0aeff3/av63fa1d6082bbbeb54d8.png',
        text: "Play"
      },
      more: {
        src: 'https://icon-library.com/images/information-icon-white/information-icon-white-3.jpg',
        text: "More Info"
      }
    }
  }

  ngOnInit(): void {
  }

}
