const topRow = document.querySelector(".topRow");
const bottomRow = document.querySelector(".bottomRow");
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");
let direction = "dfsdf";
let widthLastTopPicture = 0;
let widthLastBottomPicture = 0;
//
topRow.style.transition = "none";
let lastImage = topRow.lastElementChild;
lastImage.style.marginRight = `${300 - lastImage.offsetWidth}px`;
topRow.style.transform = "translate(300px)";
setTimeout(() => {
  topRow.style.transition = "transform 0.5s";
});
//
plusBtn.addEventListener("click", () => {
  setTimeout(() => {
    let topRowImages = document.querySelectorAll(".topRow>img");
    topRow.style.transform =
      "translate(" +
      (315 + topRowImages[topRowImages.length - 2].offsetWidth) +
      "px)";
  });
  widthLastBottomPicture = bottomRow.lastElementChild.offsetWidth + 10;
  bottomRow.style.transform = "translate(" + widthLastBottomPicture + "px)";
  direction = "right";
});

topRow.addEventListener("transitionend", () => {
  if (direction === "right") {
    topRowImages = document.querySelectorAll(".topRow>img");
    let lastImage = topRowImages[topRowImages.length - 2];
    topRowImages[topRowImages.length - 1].style.marginRight = "0px";
    lastImage.style.marginRight = `${300 - lastImage.offsetWidth}px`;
    topRow.style.transition = "none";
    topRow.prepend(topRow.lastElementChild);
    topRow.style.transform = "translate(305px)";
    setTimeout(() => {
      topRow.style.transition = "transform 0.5s";
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
      topRow.style.transition = "transform 0.5s";
    });
  }
});

minusBtn.addEventListener("click", () => {
 setTimeout(() => {
   topRowImages = document.querySelectorAll(".topRow>img");
   topRow.style.transform =
     "translate(" +
     (300 -
       topRowImages[topRowImages.length - 1].offsetWidth) +
     "px)";
 });
  widthLastBottomPicture = bottomRow.firstElementChild.offsetWidth + 10;
  bottomRow.style.transform = "translate(-" + widthLastBottomPicture + "px)";
  direction = "left";
});
bottomRow.addEventListener("transitionend", () => {
  if (direction == "right") {
    bottomRow.prepend(bottomRow.lastElementChild);
    bottomRow.style.transition = "none";
    bottomRow.style.transform = "translate(0)";
    setTimeout(() => {
      bottomRow.style.transition = "transform 0.5s";
    });
  } else {
    bottomRow.append(bottomRow.firstElementChild);
    bottomRow.style.transition = "none";
    
    bottomRow.style.transform = "translate(0)";
    setTimeout(() => {
      bottomRow.style.transition = "transform 0.5s";
    });
  }
});