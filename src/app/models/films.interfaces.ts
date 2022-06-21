export interface NavbarInterface {
    logo: ImageInterface;
    submenu: LinkInterface[];
    search: ImageInterface;
    bell: ImageInterface;    
    user: ImageInterface
}

export interface HeroInterface {
    title: string;
    gallery: ImageInterface;
    play: ButtonInterface;
    more: ButtonInterface;
}

export interface ImageInterface {
    src: string;
    alt: string;
}

export interface FilmsInterface{
    title: string;
    gallery: ImageInterface[]
}

export interface ButtonInterface {
    src: string;
    text: string;
}

export interface LinkInterface {
    title: string;
    url: string;
}
