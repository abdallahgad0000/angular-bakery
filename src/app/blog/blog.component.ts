import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#blog .articles').masonry({
      // options...
     itemSelector: '#blog .articles-colum',
      // columnWidth: 300,
      gutter :20
    });
    
    // new Masonry('.articles',{
    //   itemSelector : '.articles-colum',
    //   gutter : 20
    // })

  }

}
