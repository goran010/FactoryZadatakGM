const topRow = document.querySelector(".topRow");
const bottomRow = document.querySelector(".bottomRow");
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");
let direction;
let widthLastTopPicture=0;
let widthLastBottomPicture=0;
plusBtn.addEventListener("click", () => {
  if (widthLastTopPicture > 5 || widthLastTopPicture > 5) {
    widthLastTopPicture = topRow.lastElementChild.offsetWidth + 10;
    widthLastBottomPicture = bottomRow.lastElementChild.offsetWidth + 10;
  } else {
    widthLastTopPicture = topRow.lastElementChild.offsetWidth + 5;
    widthLastBottomPicture = bottomRow.lastElementChild.offsetWidth + 5;
  }
  topRow.style.transform = "translate(" + widthLastTopPicture + "px)";
   bottomRow.style.transform = "translate(" + widthLastBottomPicture + "px)";
  direction = "right";
});

minusBtn.addEventListener("click", () => {
  widthLastTopPicture = topRow.firstElementChild.offsetWidth + 10;
  widthLastBottomPicture = bottomRow.firstElementChild.offsetWidth + 10;
  topRow.style.transform = "translate(-" + widthLastTopPicture + "px)";
  bottomRow.style.transform = "translate(-" + widthLastBottomPicture + "px)";
  direction = "left";
});

topRow.addEventListener("transitionend", () => {
  if (direction === "right") {
    topRow.prepend(topRow.lastElementChild);
    topRow.style.transition = "none";
    topRow.style.transform = "translate(0)";
    setTimeout(() => {
      topRow.style.transition = "all 0.5s";
    });
  } else {
    topRow.append(topRow.firstElementChild);
    topRow.style.transition = "none";
    topRow.style.transform = "translate(0)";
    setTimeout(() => {
      topRow.style.transition = "all 0.5s";
    });
  }
});
bottomRow.addEventListener("transitionend", () => {
  if (direction === "right") {
    bottomRow.prepend(bottomRow.lastElementChild);
    bottomRow.style.transition = "none";
    bottomRow.style.transform = "translate(0)";
    setTimeout(() => {
      bottomRow.style.transition = "all 0.5s";
    });
  } else {
    bottomRow.append(bottomRow.firstElementChild);
    bottomRow.style.transition = "none";
    bottomRow.style.transform = "translate(0)";
    setTimeout(() => {
      bottomRow.style.transition = "all 0.5s";
    });
  }
});
