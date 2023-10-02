const allSections = document.querySelectorAll(".section");
const section2 = document.querySelector(".section-2");
const services = document.querySelector(".services");
const home = document.querySelector(".home");
const contact = document.querySelector(".contact");
const home_section = document.querySelector("#top_section");
const contact_section = document.querySelector(".footer");
const aboutUS = document.querySelector(".about-us");
const about_section = document.querySelector(".section-5");
const revealSection = function (entries, observer) {
  var [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};

var sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  treshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

function sectionviewer(targetedSection) {
  targetedSection.scrollIntoView({ behavior: "smooth" });
}
services.addEventListener("click", function () {
  sectionviewer(section2);
});

home.addEventListener("click", function () {
  sectionviewer(home_section);
});
contact.addEventListener("click", function () {
  sectionviewer(contact_section);
});
aboutUS.addEventListener("click", function () {
  sectionviewer(about_section);
});
