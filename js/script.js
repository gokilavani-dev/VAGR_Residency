
document.addEventListener("scroll", function () {

  const homeLink = document.querySelector('a[href="index.html"]');
  const aboutLink = document.querySelector('a[href="index.html#aboutus"]');
  const servicesLink = document.querySelector('a[href="index.html#services"]');

  const about = document.getElementById("aboutus");
  const services = document.getElementById("services");

  let y = window.scrollY + 100;

  // Remove all active
  homeLink.classList.remove("active");
  aboutLink.classList.remove("active");
  servicesLink.classList.remove("active");

  if (y < about.offsetTop) {
    homeLink.classList.add("active");
  } 
  else if (y >= about.offsetTop && y < services.offsetTop) {
    aboutLink.classList.add("active");
  } 
  else {
    servicesLink.classList.add("active");
  }

});
