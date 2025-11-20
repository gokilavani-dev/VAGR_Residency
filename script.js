$(document).ready(function() {
  $('ul.navbar-nav .nav-link').click(function() {
    // Remove active class from all nav-links
    $('ul.navbar-nav .nav-link').removeClass('active');
    // Add active class to the clicked nav-link
    $(this).addClass('active');
  });
});
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        let navbarToggler = document.querySelector(".navbar-collapse");
        if (navbarToggler.classList.contains("show")) {
            new bootstrap.Collapse(navbarToggler).hide();
        }
    });
});