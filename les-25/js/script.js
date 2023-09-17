$(document).ready(function(){    
      var show = $("#show");
      var close = $("#close");
      var cardInfo = $(".card-overlay");

      show.hover(function(){
            $(".card-container>img").css("box-shadow","0 15px 15px 0px rgba(0, 0, 0, 0.25)");
      },
      function(){
            $(".card").css("box-shadow", "none");
            $(".card-container>img").css("box-shadow","none");
      });

      show.click(function(){
            cardInfo.slideDown(200);
      });
      close.click(function(){
            cardInfo.slideUp(200);
      });
});