$(document).ready(function(){
    $(".design1").click(function() {
      $(".design1").toggle();
      $(".details1").toggle();
    });
    $(".details1").click(function() {
      $(".details1").toggle();
      $(".design1").toggle();
    });
    $(".design2").click(function() {
      $(".design2").toggle();
      $(".details2").toggle();
    });
    $(".details2").click(function() {
      $(".details2").toggle();
      $(".design2").toggle();
    });

    $(".design3").click(function() {
        $(".design3").toggle();
        $(".details3").toggle();
      });
      $(".details3").click(function() {
        $(".details3").toggle();
        $(".design3").toggle();
      });
      
      //Hovering images
    
       $('.port_desc').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });
    