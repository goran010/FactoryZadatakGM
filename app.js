const topRow = document.querySelector(".topRow");
const bottomRow = document.querySelector(".bottomRow");
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");
let direction,
  widthLastTopPicture,
  widthLastBottomPicture,
  lastImage,
  firstImage;

//initial translate for top and bottom row of pictures
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

//adding event listener on right button
$(".plusBtn").click(() => {
  //translating top row of pictures to right
  topRowImages = $(".topRow>img");
  topRow.style.transform =
    "translate(" +
    (315 + topRowImages[topRowImages.length - 2].offsetWidth) +
    "px)";
  //translating bottom row of pictures to right
  bottomRowImages = $(".bottomRow>img");
  bottomRow.style.transform =
    "translate(" +
    (315 + bottomRowImages[bottomRowImages.length - 2].offsetWidth) +
    "px)";
  //direction of moving
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
  //direction of moving, rows
  direction = "left";
});

//top row of pictures, adding listener after tranaslate
topRow.addEventListener("transitionend", () => {
  //case when direction of moving pictures is right
  if (direction == "right") {
    topRowImages = $(".topRow>img");
    //$(".topRow>img").css("marginRight", "0px");
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
  //case when direction of moving pictures is left
  else {
    topRowImages = $(".topRow>img");
    topRowImages[topRowImages.length - 1].style.marginRight = "0px";
    topRowImages[topRowImages.length - 2].style.marginRight = "0px";
    firstImage = topRowImages[0];
    firstImage.style.marginRight = `${300 - firstImage.offsetWidth}px`;
    topRow.style.transition = "none";
    topRow.append(topRow.firstElementChild);
    topRow.style.transform = "translate(310px)";
    setTimeout(() => {
      topRow.style.transition = "ease transform 0.5s";
    });
  }
});

//bottom row of pictures, adding listener after tranaslate
bottomRow.addEventListener("transitionend", () => {
  //case when direction of moving pictures is right
  if (direction == "right") {
    bottomRowImages = $(".bottomRow>img");
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
  //case when direction of moving pictures is left
  else {
    bottomRowImages = $(".bottomRow>img");
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
