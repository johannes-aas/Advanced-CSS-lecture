console.log("made by Johannes Aas");

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- Slide 2 ---
gsap.from(".slide2", {
  scrollTrigger: {
    trigger: ".slide2",
    scrub: true,
    pin: true,
    start: "top top",
    end: "top top",
    end: "+=70%",
    anticipatePin: 1
  }
});

// --- Slide 3 ---
gsap.from(".slide3", {
  scrollTrigger: {
    trigger: ".slide3",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=70%"
  }
});

// --- Slide 4 ---
gsap.from(".slide4", {
  scrollTrigger: {
    trigger: ".slide4",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=70%"
  }
});


// This was taken from a GSAP demo
let links = gsap.utils.toArray("nav a");
links.forEach(a => {
  let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
          });
  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "bottom center",
    onToggle: self => self.isActive && setActive(a)
  });
  a.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo: linkST.start, overwrite: "auto"});
  });
});

function setActive(link) {
  links.forEach(el => el.classList.remove("active"));
  link.classList.add("active");
}




// dark mode toogle
const button = document.getElementById('theme-toggle');

const className = 'dark';

button.addEventListener('click', function() {
  document.body.classList.toggle(className);
});