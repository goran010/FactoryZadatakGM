var directionToRight,
  topRow = $(".topRow")[0],
  bottomRow = $(".bottomRow")[0],
  plusBtn = $(".plusBtn")[0],
  minusBtn = $(".minusBtn")[0],
  body = $("body")[0],
  addAnimation = function (t) {
    setTimeout(function () {
      t.style.transition = "ease transform 0.5s";
    });
  },
  removeAnimation = function (t) {
    t.style.transition = "none";
  },
  createRightMargin = function (t) {
    t.style.marginRight = "".concat(300 - t.offsetWidth, "px");
  },
  removeRightMargin = function (t) {
    t.style.marginRight = "0px";
  };
createRightMargin(topRow.lastElementChild),
  createRightMargin(bottomRow.lastElementChild),
  (topRow.style.transform = "translate(300px)"),
  (bottomRow.style.transform = "translate(300px)"),
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
      ? ((topRowImages = $(".topRow>img")),
        removeRightMargin(topRowImages[topRowImages.length - 1]),
        createRightMargin(topRowImages[topRowImages.length - 2]),
        removeAnimation(topRow),
        topRow.prepend(topRow.lastElementChild),
        (topRow.style.transform = "translate(305px)"),
        addAnimation(topRow))
      : ((topRowImages = $(".topRow>img")),
        removeRightMargin(topRowImages[topRowImages.length - 1]),
        removeRightMargin(topRowImages[topRowImages.length - 2]),
        createRightMargin(topRowImages[0]),
        removeAnimation(topRow),
        topRow.append(topRow.firstElementChild),
        (topRow.style.transform = "translate(310px)"),
        addAnimation(topRow));
  }),
  bottomRow.addEventListener("transitionend", function () {
    directionToRight
      ? ((bottomRowImages = $(".bottomRow>img")),
        removeRightMargin(bottomRowImages[bottomRowImages.length - 1]),
        createRightMargin(bottomRowImages[bottomRowImages.length - 2]),
        removeAnimation(bottomRow),
        bottomRow.prepend(bottomRow.lastElementChild),
        (bottomRow.style.transform = "translate(305px)"),
        addAnimation(bottomRow))
      : ((bottomRowImages = $(".bottomRow>img")),
        removeRightMargin(bottomRowImages[bottomRowImages.length - 1]),
        removeRightMargin(bottomRowImages[bottomRowImages.length - 2]),
        createRightMargin(bottomRowImages[0]),
        removeAnimation(bottomRow),
        bottomRow.append(bottomRow.firstElementChild),
        (bottomRow.style.transform = "translate(310px)"),
        addAnimation(bottomRow));
  });
