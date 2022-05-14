// Set the date we're counting down to
var countDownDate = new Date("May 12, 2022 09:00:00").getTime();

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
  if(days<0)
    days=0;
  if(hours<0)
    hours=0;
  if(minutes<0)
    minutes=0;
  if(seconds<0)
    seconds=0;
  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = `
  <div class="countdown__count"><div>${days}</div><div class="countdown__text">days</div></div>
  <div class="countdown__count"><div>${hours}</div><div class="countdown__text">hours</div></div>
  <div class="countdown__count"><div>${minutes}</div><div class="countdown__text">minutes</div></div>
  <div class="countdown__count"><div>${seconds}</div><div class="countdown__text">seconds</div></div>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);