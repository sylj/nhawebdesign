$(document).ready(function(){    
      var show = $("#show");
      var close = $("#close");
      var cardInfo = $(".card-overlay");
      
      show.click(function(){
            cardInfo.slideDown(200);
      });
      close.click(function(){
            cardInfo.slideUp(200);
      });
});