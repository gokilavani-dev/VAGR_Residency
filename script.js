$(document).ready(function() {
  $('ul.navbar-nav .nav-link').click(function() {
    // Remove active class from all nav-links
    $('ul.navbar-nav .nav-link').removeClass('active');
    // Add active class to the clicked nav-link
    $(this).addClass('active');
  });
});