import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {


  constructor() { }


  hoverIn(link:any){
      if ($(document).scrollTop() > 0) {
        $(link).css("color", "rgba(8, 5, 5, 0.842)");
      } else {
          if ($(window).width() > 992){
              $(link).css("color", "#94723c");
          }
          else{
          $(link).css("color", "rgba(8, 5, 5, 0.842)");
        }
      }
  }

  hoverOut(link:any){
      if ($(document).scrollTop() > 0) {
        $(link).css("color", "#595959c9");
        $(".active a").css("color", "rgba(8, 5, 5, 0.842)");
      } else {
          if ($(window).width() > 992){
              $(link).css("color", "#fff");
          }
          else{
              $(link).css("color", "#595959c9");
        $(".active a").css("color", "rgba(8, 5, 5, 0.842)");
          }
      }
  }



  ngOnInit(): void {

// console.log(location.pathname)

  $(document).scroll(function () {
    if ($(document).scrollTop() > 0) {
      $("nav a img").attr("src", "i../../assets/images/bakery-color.png");
      $("nav ul li a").css("color", "#595959c9");
      $(".navcontainer").css("background-color", "#fff");
      if ($(window).width() > 992) {
        $(".navLinks").css("height", "60px");
      }
      $(".active a").css("color", "rgba(8, 5, 5, 0.842)");
    } else {
      if ($(window).width() > 992) {
        $("nav a img").attr("src", "../../assets/images/bakery-light-1.png");
        $("nav ul li a").css("color", "#fff");
        $(".navcontainer").css("background-color", "transparent");
        if ($(window).width() > 992) {
          $(".navLinks").css("height", "90px");
        }
        $(".active a").css("color", "#fff");
      }
    }
  });






  $(".home-link").hover(() => { this.hoverIn(".home-link") },()=>{ this.hoverOut(".home-link") });
  $(".about-link").hover(() => { this.hoverIn(".about-link") },()=>{ this.hoverOut(".about-link") });
  $(".offer-link").hover(() => { this.hoverIn(".offer-link") },()=>{ this.hoverOut(".offer-link") });
  $(".gallary-link").hover(() => { this.hoverIn(".gallary-link") },()=>{ this.hoverOut(".gallary-link") });
  $(".blog-link").hover(() => { this.hoverIn(".blog-link") },()=>{ this.hoverOut(".blog-link") });
  $(".contact-link").hover(() => { this.hoverIn(".contact-link") },()=>{ this.hoverOut(".contact-link") });







  (function () {
    if ($(window).width() < 992) {
      $("nav a img").attr("src", "../../assets/images/bakery-color.png");
    }
  })();
  $(window).resize(function () {
    if ($(window).width() < 992) {
      $("nav a img").attr("src", "../../assets/images/bakery-color.png");
      $("nav ul li a").css("color", "#595959c9");
      $(".navcontainer").css("background-color", "#fff");
      $(".navLinks").css("height", "auto");
      $(".active a").css("color", "rgba(8, 5, 5, 0.842)");
    } else {
      if ($(document).scrollTop() > 0) {
        $("nav a img").attr("src", "../../assets/images/bakery-color.png");
        $("nav ul li a").css("color", "#595959c9");
        $(".navcontainer").css("background-color", "#fff");
        if ($(window).width() > 992) {
          $(".navLinks").css("height", "60px");
        }
        $(".active a").css("color", "rgba(8, 5, 5, 0.842)");
      } else {
        if ($(window).width() > 992) {
          $("nav a img").attr("src", "../../assets/images/bakery-light-1.png");
          $("nav ul li a").css("color", "#fff");
          $(".navcontainer").css("background-color", "transparent");
          if ($(window).width() > 992) {
            $(".navLinks").css("height", "90px");
          }
          $(".active a").css("color", "#fff");
        }
      }
    }
  });

  }
//

}
