import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  genres: string[] = [
    'Slasher',
    'Body Horror',
    'Supernatural Horror',
    'Psychological Horror',
    'Zombie Horror',
    'Lovecraftian Horror',
    'Splatterpunk',
    'Giallo (Italian Thriller/Horror)',
    'Vampire Horror',
    'Werewolf Horror',
    'Ghost Stories',
    'Haunted House',
    'Cannibal Horror',
    'Anthology Horror',
    'Folk Horror',
    'Sci-Fi Horror',
    'Monster Horror',
    'Revenge Horror',
    'Found Footage (early instances)',
    'Exploitation Horror',
    'Comedy Horror',
    'Holiday Horror',
    'Survival Horror',
    'Occult Horror',
    'Eco-Horror',
    'Paranormal Horror',
    'Puppet/Mask Horror',
    'Cult Horror',
    'Possession Horror',
    'Apocalyptic Horror'
]


  constructor() { }

  ngOnInit(): void {
    // In a real-world application, you would fetch this list from a database
  }

}
