               
                $(document).ready(function(){
                          var bg=Math.floor((Math.random() * 9) + 1);
                          $(".container_single_page").attr("style","background-image : url('img/"+bg+".jpg'); background-position: center; background-size:cover; background-attachment: fixed;");


                      $(window).on('scroll', function () {
                          var pixs = $(document).scrollTop()
                          pixs = pixs / 120;
                          $(".container_single_page").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
                      });

                    });


function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    $("html, body").animate({ scrollTop: $('#results').offset().top -20}, 1000);
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}            


function bigGraph(id){
  circle='#circle-'+id.substring(5,id.length);
  color=$(circle).attr("style").substring($(circle).attr("style").indexOf("stroke")+7,$(circle).attr("style").length-1);
  $(circle).attr("style","stroke-width : 17px; stroke:"+color);
}

function normalGraph(id){
  circle='#circle-'+id.substring(5,id.length);
  color=$(circle).attr("style").substring($(circle).attr("style").indexOf("stroke")+7,$(circle).attr("style").length-1);
  $(circle).attr("style","stroke-width : 5px; stroke:"+color);
}


function visuals()
{
  particlesJS.load('particles-js', 'particles.json', function() {
    });

    particlesJS.load('particles-loading',"particles-loading.json",function(){
    if(document.URL.indexOf("id")==-1){   
      $(".loader").hide();
     }
    });

  $(window).scroll(function() {
      div = document.getElementById("results");
    rect = div.getBoundingClientRect();
      if ($(window).scrollTop() >= rect.top*2){
        $("#searchIconBack").show();
      $("#proglogoIcon").hide();
      }
    if ($(window).scrollTop() < rect.top*2){
        $("#searchIconBack").hide();
      $("#proglogoIcon").show();
    }
  });

  $("#searchIconBack").click(function()
  {
    $("html, body").animate({ scrollTop: 0}, 1000);
  });

    $("#searchIcon").hide();
  $("#searchIconBack").hide();
    $("#proglogoIcon").show();

    $('[data-toggle="tooltip"]').tooltip(); 
     $( ".controls,graph" ).draggable({ scroll: false});

   $('.toggle').click(function(e){
      e.preventDefault(); // The flicker is a codepen thing
      $(this).toggleClass('toggle-on');
    });
}