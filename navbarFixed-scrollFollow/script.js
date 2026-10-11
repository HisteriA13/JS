const nav = document.querySelector(".nav");
const logo = document.getElementById("logo");
const sections = document.querySelectorAll("section[id], h2[id]");
const navLinks = document.querySelectorAll("a[href^='#']");

const updateActiveLink = () => {
  const scrollPosition = window.scrollY + 110;
  let currentSection = "home";
  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentSection = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("current");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("current");
    }
  });
};

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("active");
    logo.classList.add("active");
  } else {
    nav.classList.remove("active");
    logo.classList.remove("active");
  }
  updateActiveLink();
};

window.addEventListener("scroll", fixNav);
