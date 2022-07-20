var directionToRight,
  topRow = $(".topRow")[0],
  bottomRow = $(".bottomRow")[0],
  plusBtn = $(".plusBtn")[0],
  minusBtn = $(".minusBtn")[0],
  body = $("body")[0],
  addAnimation = function (a) {
    setTimeout(function () {
      a.style.transition = "ease transform 0.5s";
    });
  },
  removeAnimation = function (a) {
    a.style.transition = "none";
  },
  createRightMargin = function (a) {
    a.style.marginRight = "".concat(300 - a.offsetWidth, "px");
  },
  removeRightMargin = function (a) {
    a.style.marginRight = "0px";
  };
createRightMargin(topRow.lastElementChild),
  createRightMargin(bottomRow.lastElementChild),
  setTimeout(function () {
    (topRow.style.transform = "translate(300px)"),
      (bottomRow.style.transform = "translate(300px)");
  }),
  setTimeout(function () {
    addAnimation(bottomRow), addAnimation(topRow);
  }),
  $(".plusBtn").on("click", function () {
    (topRowImages = $(".topRow>img")),
      (topRow.style.transform = "translate(".concat(
        315 + topRowImages[topRowImages.length - 2].offsetWidth,
        "px)"
      )),
      (bottomRowImages = $(".bottomRow>img")),
      (bottomRow.style.transform =
        "translate(" +
        (315 + bottomRowImages[bottomRowImages.length - 2].offsetWidth) +
        "px)"),
      (directionToRight = !0);
  }),
  $(".minusBtn").on("click", function () {
    (topRowImages = $(".topRow>img")),
      (topRow.style.transform = "translate(".concat(
        300 - topRowImages[topRowImages.length - 1].offsetWidth,
        "px)"
      )),
      (bottomRowImages = $(".bottomRow>img")),
      (bottomRow.style.transform = "translate(".concat(
        300 - bottomRowImages[bottomRowImages.length - 1].offsetWidth,
        "px)"
      )),
      (directionToRight = !1);
  }),
  topRow.addEventListener("transitionend", function () {
    directionToRight
      ? (removeRightMargin(
          (topRowImages = $(".topRow>img"))[topRowImages.length - 1]
        ),
        createRightMargin(topRowImages[topRowImages.length - 2]),
        removeAnimation(topRow),
        topRow.prepend(topRow.lastElementChild),
        (topRow.style.transform = "translate(305px)"),
        addAnimation(topRow))
      : (removeRightMargin(
          (topRowImages = $(".topRow>img"))[topRowImages.length - 1]
        ),
        removeRightMargin(topRowImages[topRowImages.length - 2]),
        createRightMargin(topRowImages[0]),
        removeAnimation(topRow),
        topRow.append(topRow.firstElementChild),
        (topRow.style.transform = "translate(310px)"),
        addAnimation(topRow));
  }),
  bottomRow.addEventListener("transitionend", function () {
    directionToRight
      ? (removeRightMargin(
          (bottomRowImages = $(".bottomRow>img"))[bottomRowImages.length - 1]
        ),
        createRightMargin(bottomRowImages[bottomRowImages.length - 2]),
        removeAnimation(bottomRow),
        bottomRow.prepend(bottomRow.lastElementChild),
        (bottomRow.style.transform = "translate(305px)"),
        addAnimation(bottomRow))
      : (removeRightMargin(
          (bottomRowImages = $(".bottomRow>img"))[bottomRowImages.length - 1]
        ),
        removeRightMargin(bottomRowImages[bottomRowImages.length - 2]),
        createRightMargin(bottomRowImages[0]),
        removeAnimation(bottomRow),
        bottomRow.append(bottomRow.firstElementChild),
        (bottomRow.style.transform = "translate(310px)"),
        addAnimation(bottomRow));
  });
