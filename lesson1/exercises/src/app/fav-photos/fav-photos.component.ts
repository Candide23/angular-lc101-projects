import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://blogs.umsl.edu/news/files/2016/09/LC-818F-1.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png';
  image3 = 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}