import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imgWidth:any;
  imgs:any;
  constructor() { }

  adjustWidth(){
      this.imgWidth= $(".img-container").width();
      $(".img").css('height',this.imgWidth);
  }
  ngOnInit(): void {
    this.adjustWidth();
    $(window).resize(()=>{
      this.adjustWidth();
    });

    this.imgs = Array.from(document.querySelectorAll(".img-overlay"));
    console.log(this.imgs[1].getAttribute("carousel-item"))
    // for(let i=0 ; i<this.imgs.lenght;i++){
    //   this.imgs[i].onclick(function(){
    //     alert("jjjjj")
    //     console.log("nnnnnnn")
    //   })
    // }
    $(".img-overlay").click((eventInfo:any)=>{
      let currentIndex= eventInfo.currentTarget.getAttribute("carousel-item");
      $(`.indicator-${currentIndex}`).addClass("active");
      $(`.indicator-${currentIndex}`).siblings().removeClass("active");
      $(`.carousel-img-${currentIndex}`).addClass("active");
      $(`.carousel-img-${currentIndex}`).siblings().removeClass("active");
      $(".carousel").css({'display':'flex'})
    });
    $(".carousel i").click(()=>{
      $(".carousel").css({'display':'none'})
    });
  }

}
