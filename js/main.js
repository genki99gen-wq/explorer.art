  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
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
    })
  })

