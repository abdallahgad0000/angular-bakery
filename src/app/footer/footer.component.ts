import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }


  zeropx='0px';

  ngOnInit(): void {
    $("#backToTopButton").click(function(){
      $('html').animate({scrollTop:0},1000);
      $('body').animate({scrollTop:0},1000);
    })
    $(window).scroll(function(){
      if($(window).scrollTop()>100){
        $("#backToTopButton").css({"opacity":"0.5","display":"inline"});
      }
      else{
        $("#backToTopButton").css({"opacity":"0","display":"none"});

      }
    });
    $("#backToTopButton").hover(function(){
      if($(window).scrollTop()>100){
        $("#backToTopButton").css({"opacity":"1"});
      }
    },function(){
      if($(window).scrollTop()>100){
        $("#backToTopButton").css({"opacity":"0.5"});
      }
    },350)
  }

}
