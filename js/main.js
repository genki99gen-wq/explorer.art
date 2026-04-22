  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  const links = document.querySelectorAll("#nav a");

  links.forEach(link => {
    link.addEventListener("click",() => {
      nav.classList.remove("active");
    });
  });

  window.addEventListener("load",()=> {
    const elements =document.querySelectorAll(".fade-in");

    elements.forEach(el => {
      el.classList.add("show");
    });
  });

  const items = document.querySelectorAll(".fade");

  window.addEventListener("scroll", () => {
    items.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < window.innerHeight - 100 && top > -100) {
        el.classList.add("active");
      }
      else {
        el.classList.remove("active");
      }
    });
  });

  document.addEventListener('DOMContentLoaded' , function () {
    const pagetop = document.getElementById('pagetop');

    window.addEventListener('scroll' , function () {
      if (window.scrollY > 100) {
        pagetop.classList.add('visible');
      } else {
        pagetop.classList.remove('visible');
      }
    });

    pagetop.addEventListener('click' , function () {
      window.scrollTo({
        top:0,
      });
    });
  });

