const container = document.querySelector(".card__container");
const card = document.querySelector(".card__body");
const shuriken__cardHolder = document.querySelector(".card__image");
const shuriken__image = document.querySelector(".card__image > img");
const title = document.querySelector(".card__info");

// Animation when mouse moves over the container
container.addEventListener("mousemove", (e) => {
  // divide the whole expression with a higher number to get more controll over the rotation
  const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 20;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
/*
 Animate when mouseEnter and popping out elements on Zaxis.
 Note : TranslateZ cant only be applied on the child div containers when you have 
        transform-style=preserve-3d on parent
*/
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  // Popping out the card element using z axis
  shuriken__cardHolder.style.transform = "translateZ(100px)";
  shuriken__image.style.transform = "rotate(360deg)";
  title.style.transform = "translateZ(150px)";
});

/*
 Animate when mouse leave
 Here we are adding smoothness to the snap when we leave the container area so
 our card snap back to its orignal position smoothly
*/

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateX(0deg) rotateY(0deg)";

  // Popback the card element
  shuriken__cardHolder.style.transform = "translateZ(0px)";
  shuriken__image.style.transform = "rotate(0deg)";
  title.style.transform = "translateZ(0px)";
});
