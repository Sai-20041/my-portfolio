document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.getAttribute("data-width");
        observer.unobserve(el); // run only once per skill
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
});
document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.getAttribute("data-width");
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));

  // Resume Animation
  gsap.from(".resume-box", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".resume-section",
      start: "top 80%"
    }
  });
});
