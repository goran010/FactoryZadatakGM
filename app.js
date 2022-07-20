const topRow = $(".topRow")[0];
const bottomRow = $(".bottomRow")[0];
const plusBtn = $(".plusBtn")[0];
const minusBtn = $(".minusBtn")[0];
const body = $("body")[0];
let directionToRight;

//functions
const addAnimation = (element) => {
  setTimeout(() => {
    element.style.transition = "ease transform 0.5s";
  });
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


topRow.style.transform = "translate(300px)";
bottomRow.style.transform = "translate(300px)";


  setTimeout(() => {
    addAnimation(bottomRow);
    addAnimation(topRow);
  });

//adding event listener on right button
$(".plusBtn").on("click", () => {
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
  directionToRight = true;
});

//adding event listener on left button
$(".minusBtn").on("click", () => {
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
  directionToRight = false;
});

//top row of pictures, adding listener after tranasition
topRow.addEventListener("transitionend", () => {

  //case when direction of moving pictures is to right
  if (directionToRight) {
    topRowImages = $(".topRow>img");

    removeRightMargin(topRowImages[topRowImages.length - 1]);
    createRightMargin(topRowImages[topRowImages.length - 2]);

    removeAnimation(topRow);

    topRow.prepend(topRow.lastElementChild);

    topRow.style.transform = "translate(305px)";

    addAnimation(topRow);
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

    addAnimation(topRow);
  }
});

//bottom row of pictures, adding listener after tranaslate

bottomRow.addEventListener("transitionend", () => {

  //case when direction of moving pictures is right

  if (directionToRight) {

    bottomRowImages = $(".bottomRow>img");

    removeRightMargin(bottomRowImages[bottomRowImages.length - 1]);
    createRightMargin(bottomRowImages[bottomRowImages.length - 2]);

    removeAnimation(bottomRow);

    bottomRow.prepend(bottomRow.lastElementChild);

    bottomRow.style.transform = "translate(305px)";

    addAnimation(bottomRow);
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

    addAnimation(bottomRow);
  }
});