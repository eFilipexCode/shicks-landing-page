// Create background following mouse animation
const sections = $(".move");
const sectionsArray = Array.from(sections);

let x;
let y;
sectionsArray.forEach((section) => {
  $(section).mousemove((event) => {
    x = event.clientX;
    y = event.clientY;
    setBackgroundEffect(section, x / 10, y / 10);
  });
});

function setBackgroundEffect(section: HTMLElement, x: number, y: number) {
  $(section).css("background-position", `${x}px ${y}px, ${x}px ${y}px`);
}

// create spin card effect
const cards = Array.from($(".card"));

cards.forEach((card) => {
  const [frontCard] = $(card).children();
  const [backCard] = $(frontCard).siblings();
  const [, data] = $(frontCard).children();
  const button = $(data).children()[1];
  const buttonBackCard = $(backCard).children()[2];

  $(button).click(() => {
    $(card).toggleClass("spin");
  });

  $(buttonBackCard).click(() => {
    $(card).toggleClass("spin");
  });
});
