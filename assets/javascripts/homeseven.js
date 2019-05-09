const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-seven');
  if (window.location.href === "http://localhost:4000/") {
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight*.94) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  } else {
    navbar.classList.add('scrolled');
  }
}

initUpdateNavbarOnScroll();
