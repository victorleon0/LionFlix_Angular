import { NavbarInterface } from './../../models/films.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbar : NavbarInterface

  constructor() {
    this.navbar = {
    logo: {
      src: '../../assets/images/LOGO/LIONFLIX.png',
      alt: "Logo Netflix"
    },
    submenu: [{
      title: "HOME",
      url: "#home"
    }, 
    {
      title: "TV SHOWS",
      url: "#tvshows"
    }, 
    {
      title: "MOVIES",
      url: "#movies"
    }, 
    {
      title: "NEW & POPULAR",
      url: "#popular"
    }, 
    {
      title: "MY LIST",
      url: "#mylist"
    }
  ],
    search: {
      src: '../../assets/images/Icons/zoom-32.png',
      alt: "lupa"
    },
    bell: {
      src: '../../assets/images/Icons/bell-3-32.png',
      alt: "Bell"
    },
    user: {
      src: 'https://icon-library.com/images/profile-icon-white/profile-icon-white-22.jpg',
      alt: "user"
    }
   }
  }

  ngOnInit(): void {
  }

}
