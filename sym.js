$('#sec-1').addClass("active");

// Smooth scrolling
      $("#sec-1").click(function() {
           $('html, body').animate({
               scrollTop: $("#one").offset().top-66
           }, 1000);
        return false;
       });
      
      $("#sec-2").click(function() {
           $('html, body') .animate({
               scrollTop: $("#two").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-3").click(function() {
           $(' html,body') .animate({
               scrollTop: $("#three").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-4").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop: $("#four").offset().top-112
           }, 1000);
        return false;
       });

       $('#two').waypoint(function() {
      
        $(".container ul li").children().removeClass("active");
        $("#sec-2").addClass("active");
        
      }, { offset: 101 });
      
      
      $('#three').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#sec-3").addClass("active");
      }, { offset: 101 });
      
      $('#four').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#sec-4").addClass("active");
      }, { offset: 101 });
      
      $('#one').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#sec-1").addClass("active");
      }, { offset: 0 });




// TIMER
// Set the date we're counting down to
var countDownDate = new Date("Apr 2, 2021 18:18:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);