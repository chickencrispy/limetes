document.addEventListener("DOMContentLoaded", function (event) {

  // Add shadow to Navbar Vertical on Scroll
  var scrollbar = document.querySelector(".scrollbar");
  scrollbar.addEventListener("scroll", (e) => {
    const brand = document.querySelector('.navbar-top-brand');
    if (scrollbar.scrollTop > 0) {
      brand.classList.add("shadow");
    } else {
      brand.classList.remove("shadow");
    }
  });

  window.addEventListener('scroll', (e) => {
    const topnav = document.querySelector('.navbar-top');
    if (window.pageYOffset > 0) {
      topnav.classList.add("shadow");
    } else {
      topnav.classList.remove("shadow");
    }
  });

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))

  // Your code to run since DOM is loaded and ready
  
  
});