$('#btn-img-1').click( function() {
	$('#btn-img-1').addClass('btn-active');
	$('#btn-img-2').removeClass('btn-active');
    $('#btn-img-3').removeClass('btn-active');
    $('#img1').addClass('active-img');
    $('#img2').addClass('passive-img');
    $('#img2').removeClass('active-img');
    $('#img3').addClass('passive-img');
    $('#img3').removeClass('active-img');
    $('#info').html("<p>We held rallies and demonstrations, and held parallel campaigns in Delhi, India and Nairobi, Kenya. Green the Gene achieved a tremendous amount of help and support from the shop owners, sales people, consumers, and even the government.</p><a href='#''>Read More</a><br /><br /><button class='btn btn-primary'>ALL INITIATIVES</button>");
});
$('#btn-img-2').click( function() {
	$('#btn-img-1').removeClass('btn-active');
    $('#btn-img-2').addClass('btn-active');
    $('#btn-img-3').removeClass('btn-active');
    $('#img2').addClass('active-img');
    $('#img1').addClass('passive-img');
    $('#img1').removeClass('active-img');
    $('#img3').addClass('passive-img');
    $('#img3').removeClass('active-img');
    $('#info').html("<p>This ongoing campaign initiated in The Gambia, a west African country, by Green the Gene's representative Fatoumatta Bah encourages people to recycle things that we all tend to just throw away usually and along with that - plant trees. </p><a href='#''>Read More</a><br /><br /><button class='btn btn-primary'>ALL INITIATIVES</button>");
});
$('#btn-img-3').click( function() {
	$('#btn-img-1').removeClass('btn-active');
	$('#btn-img-2').removeClass('btn-active');
    $('#btn-img-3').addClass('btn-active');
    $('#img3').addClass('active-img');
    $('#img2').addClass('passive-img');
    $('#img2').removeClass('active-img');
    $('#img1').addClass('passive-img');
    $('#img1').removeClass('active-img');
    $('#info').html("<p>Clean Up the World is a community based environmental program that inspires and empowers individuals and communities from every corner of the globe to clean up, fix up and conserve their environment. </p><a href='#''>Read More</a><br /><br /><button class='btn btn-primary'>ALL INITIATIVES</button>");
});


$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})