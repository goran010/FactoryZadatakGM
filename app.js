const topRow = document.querySelector(".topRow");
const bottomRow = document.querySelector(".bottomRow");
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");
let direction;

const addAnimation = (element) => {
  element.style.transition = "ease transform 0.5s";
};
const removeAnimation = (element) => {
  element.style.transition = "none";
};

const createRightMargin = (image) => {
  image.style.marginRight = `${300 - image.offsetWidth}px`;
};
const removeRightMargin = (image) => {
  image.style.marginRight = `0px`;
};

//adding margin that neutralizes the difference in image width
createRightMargin(topRow.lastElementChild);
createRightMargin(bottomRow.lastElementChild);

//adding animation
setTimeout(() => {
  addAnimation(bottomRow);
  addAnimation(topRow);
});

//adding event listener on right button
$(".plusBtn").click(() => {
  //translating top row of pictures to right
  topRowImages = $(".topRow>img");
  topRow.style.transform = `translate(${
    315 + topRowImages[topRowImages.length - 2].offsetWidth
  }px)`;
  //translating bottom row of pictures to right
  bottomRowImages = $(".bottomRow>img");
  bottomRow.style.transform =
    "translate(" +
    (315 + bottomRowImages[bottomRowImages.length - 2].offsetWidth) +
    "px)";
  //defining the direction of image movement
  direction = "right";
});

//adding event listener on left button
$(".minusBtn").click(() => {
  //translating top row of pictures to left
  topRowImages = $(".topRow>img");
  topRow.style.transform = `translate(${
    300 - topRowImages[topRowImages.length - 1].offsetWidth
  }px)`;
  //translating bottom row of pictures to left
  bottomRowImages = $(".bottomRow>img");
  bottomRow.style.transform = `translate(${
    300 - bottomRowImages[bottomRowImages.length - 1].offsetWidth
  }px)`;
  //defining the direction of image movement
  direction = "left";
});

//top row of pictures, adding listener after tranasition
topRow.addEventListener("transitionend", () => {
  //case when direction of moving pictures is to right
  if (direction == "right") {
    topRowImages = $(".topRow>img");
    removeRightMargin(topRowImages[topRowImages.length - 1]);
    createRightMargin(topRowImages[topRowImages.length - 2]);
    removeAnimation(topRow);
    topRow.prepend(topRow.lastElementChild);
    topRow.style.transform = "translate(305px)";
    setTimeout(() => {
      addAnimation(topRow);
    });
  }
  //case when direction of moving pictures is to left
  else {
    topRowImages = $(".topRow>img");
    removeRightMargin(topRowImages[topRowImages.length - 1]);
    removeRightMargin(topRowImages[topRowImages.length - 2]);
    createRightMargin(topRowImages[0]);
    removeAnimation(topRow);
    topRow.append(topRow.firstElementChild);
    topRow.style.transform = "translate(310px)";
    setTimeout(() => {
      addAnimation(topRow);
    });
  }
});

//bottom row of pictures, adding listener after tranaslate
bottomRow.addEventListener("transitionend", () => {
  //case when direction of moving pictures is right
  if (direction == "right") {
    bottomRowImages = $(".bottomRow>img");
    removeRightMargin(bottomRowImages[bottomRowImages.length - 1]);
    createRightMargin(bottomRowImages[bottomRowImages.length - 2]);
    removeAnimation(bottomRow);
    bottomRow.prepend(bottomRow.lastElementChild);
    bottomRow.style.transform = "translate(305px)";
    setTimeout(() => {
      addAnimation(bottomRow);
    });
  }
  //case when direction of moving pictures is left
  else {
    bottomRowImages = $(".bottomRow>img");
    removeRightMargin(bottomRowImages[bottomRowImages.length - 1]);
    removeRightMargin(bottomRowImages[bottomRowImages.length - 2]);
    createRightMargin(bottomRowImages[0]);
    removeAnimation(bottomRow);
    bottomRow.append(bottomRow.firstElementChild);
    bottomRow.style.transform = "translate(310px)";
    setTimeout(() => {
      addAnimation(bottomRow);
    });
  }
});

//changing color of arrow pointing right
$(".plusBtn").mouseenter(() => {
  document.querySelector(".rightArrow").src = "Assets/arrow-gray-left.png";
});
$(".plusBtn").mouseleave(() => {
  document.querySelector(".rightArrow").src = "Assets/arrow-blue-left.png";
});

//changing color of arrow pointing left
$(".minusBtn").mouseenter(() => {
  document.querySelector(".leftArrow").src = "Assets/arrow-gray-right.png";
});
$(".minusBtn").mouseleave(() => {
  document.querySelector(".leftArrow").src = "Assets/arrow-blue-right.png";
});
