  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
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