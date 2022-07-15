const topRow = document.querySelector(".topRow");
const bottomRow = document.querySelector(".bottomRow");
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");
let direction;
let widthLastTopPicture;
let widthLastBottomPicture;
let lastImage;
//
topRow.style.transition = "none";
lastImage = topRow.lastElementChild;
lastImage.style.marginRight = `${300 - lastImage.offsetWidth}px`;
topRow.style.transform = "translate(300px)";
setTimeout(() => {
  topRow.style.transition = "ease transform 0.5s";
});
bottomRow.style.transition = "none";
lastImage = bottomRow.lastElementChild;
lastImage.style.marginRight = `${300 - lastImage.offsetWidth}px`;
bottomRow.style.transform = "translate(300px)";
setTimeout(() => {
  bottomRow.style.transition = "ease transform 0.5s";
});
//
plusBtn.addEventListener("click", () => {
  setTimeout(() => {
    topRowImages = document.querySelectorAll(".topRow>img");
    topRow.style.transform =
      "translate(" +
      (315 + topRowImages[topRowImages.length - 2].offsetWidth) +
      "px)";
  });
   setTimeout(() => {
     bottomRowImages = document.querySelectorAll(".bottomRow>img");
     bottomRow.style.transform =
       "translate(" +
       (315 + bottomRowImages[bottomRowImages.length - 2].offsetWidth) +
       "px)";
   });
  direction = "right";
});

topRow.addEventListener("transitionend", () => {
  if (direction === "right") {
    topRowImages = document.querySelectorAll(".topRow>img");
    lastImage = topRowImages[topRowImages.length - 2];
    topRowImages[topRowImages.length - 1].style.marginRight = "0px";
    lastImage.style.marginRight = `${300 - lastImage.offsetWidth}px`;
    topRow.style.transition = "none";
    topRow.prepend(topRow.lastElementChild);
    topRow.style.transform = "translate(305px)";
    setTimeout(() => {
      topRow.style.transition = "ease transform 0.5s";
    });
  }
  if (direction === "left") {
    topRowImages = document.querySelectorAll(".topRow>img");
    topRowImages[topRowImages.length - 1].style.marginRight = "0px";
    topRowImages[topRowImages.length - 2].style.marginRight = "0px";
    let firstImage = topRowImages[0];
    firstImage.style.marginRight = `${300 - firstImage.offsetWidth}px`;
    topRow.style.transition = "none";
    topRow.append(topRow.firstElementChild);
    topRow.style.transform = "translate(310px)";
    setTimeout(() => {
      topRow.style.transition = "ease transform 0.5s";
    });
  }
});
minusBtn.addEventListener("click", () => {
 setTimeout(() => {
   topRowImages = document.querySelectorAll(".topRow>img");
   topRow.style.transform =
     `translate(${300 -
     topRowImages[topRowImages.length - 1].offsetWidth}px)`;
 });
  setTimeout(() => {
    bottomRowImages = document.querySelectorAll(".bottomRow>img");
    bottomRow.style.transform =
      "translate(" +
      (300 - bottomRowImages[bottomRowImages.length - 1].offsetWidth) +
      "px)";
  });
  direction = "left";
});
bottomRow.addEventListener("transitionend", () => {
  if (direction === "right") {
    bottomRowImages = document.querySelectorAll(".bottomRow>img");
    lastImage = bottomRowImages[bottomRowImages.length - 2];
    bottomRowImages[bottomRowImages.length - 1].style.marginRight = "0px";
    lastImage.style.marginRight = `${300 - lastImage.offsetWidth}px`;
    bottomRow.style.transition = "none";
    bottomRow.prepend(bottomRow.lastElementChild);
    bottomRow.style.transform = "translate(305px)";
    setTimeout(() => {
      bottomRow.style.transition = "ease transform 0.5s";
    });
  }
  if (direction === "left") {
    bottomRowImages = document.querySelectorAll(".bottomRow>img");
    bottomRowImages[bottomRowImages.length - 1].style.marginRight = "0px";
    bottomRowImages[bottomRowImages.length - 2].style.marginRight = "0px";
    let firstImage = bottomRowImages[0];
    firstImage.style.marginRight = `${300 - firstImage.offsetWidth}px`;
    bottomRow.style.transition = "none";
    bottomRow.append(bottomRow.firstElementChild);
    bottomRow.style.transform = "translate(310px)";
    setTimeout(() => {
      bottomRow.style.transition = "ease transform 0.5s";
    });
  }
});
plusBtn.addEventListener("mouseenter", () => {
  document.querySelector(".rightArrow").src = "Assets/arrow-gray-right.png";
});
plusBtn.addEventListener("mouseleave", () => {
  document.querySelector(".rightArrow").src = "Assets/arrow-blue-left.png";
});