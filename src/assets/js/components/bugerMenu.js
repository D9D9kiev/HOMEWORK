
const downMenuBtn = document.querySelector(".down-menu-btn");
const downMenu = document.querySelector(".down-nav");
const downMenuBtnTopLine = document.querySelector(
  ".down-menu-btn__line:nth-child(1)"
);
const downMenuBtnMiddleLine = document.querySelector(
  ".down-menu-btn__line:nth-child(2)"
);
const downMenuBtnBottomLine = document.querySelector(
  ".down-menu-btn__line:nth-child(3)"
);

downMenuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  downMenuBtn.classList.toggle("active");
  if (downMenuBtn.classList.contains("active")) {
    downMenuBtnTopLine.classList.add("top");
    downMenuBtnMiddleLine.classList.add("middle");
    downMenuBtnBottomLine.classList.add("bottom");
    downMenu.style.display = "flex";
  } else {
    downMenuBtnTopLine.classList.remove("top");
    downMenuBtnMiddleLine.classList.remove("middle");
    downMenuBtnBottomLine.classList.remove("bottom");
    downMenu.style.display = "none";
  }
});
document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("drop-down-nav__item") ||
    event.target.classList.contains("nav__link")
  )
    return;
  downMenuBtn.classList.remove("active");
  downMenuBtnTopLine.classList.remove("top");
  downMenuBtnMiddleLine.classList.remove("middle");
  downMenuBtnBottomLine.classList.remove("bottom");
  downMenu.style.display = "none";
});
