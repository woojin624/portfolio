"use strict";

// main
const body = document.querySelector("body");
const circle = document.querySelector(".circle");
const mainSection = document.querySelector("section.main");
const mail = document.querySelector(".mail");
const header = document.querySelector(".header");
const navList = document.querySelectorAll(".nav-list");
const toTop = document.querySelector(".to-top");
const hello = document.querySelector(".hello");
const cubeLogo = document.querySelector("header > div.cube-logo");
const cubeLogoCube = document.querySelector("header > div.cube-logo > div.cube");
const cubeLogoCubeDiv = document.querySelectorAll("header > div.cube-logo > div.cube > div");
const aboutSpace = document.querySelector(".about-space");
const scrollDown = document.querySelector(".scroll-down");
const loadingCube = document.querySelector(".loading-cube");
const loadingCubeCube = document.querySelector("section.loading-cube > div.cube");
// about
const lineMentLeft = document.querySelector("div.line-ment > .left > p ");
const lineMentRight = document.querySelector("div.line-ment > .right > p ");
const lineMentBox = document.querySelector(".line-ment");
const profileImage = document.querySelector("div.circle > img.profile-image");
const mentBoxWrap = document.querySelector(".box-ment");
const mentBox = document.querySelector(".box-ment > .box");
const mentInBox = document.querySelector(".box-ment > p");
const skillIntro = document.querySelector("div.skill-intro");
const skillIntroP = document.querySelector("div.skill-intro > p ");
const skillCircle = document.querySelector("div.skill-wrap > div.centerCircle");
const skillWrap = document.querySelector("div.skill-wrap");
const skillLastCube = document.querySelector("div.skill-wrap > div.lastCube");
const skillBottom = document.querySelector("div.skill-wrap > div.lastCube > div.bottom");
const skillFront = document.querySelector("div.skill-wrap > div.lastCube > div.front");
const skillBack = document.querySelector("div.skill-wrap > div.lastCube > div.back");
const skillLeft = document.querySelector("div.skill-wrap > div.lastCube > div.left");
const skillRight = document.querySelector("div.skill-wrap > div.lastCube > div.right");
const skillTop = document.querySelector("div.skill-wrap > div.lastCube > div.right > div.top");
const skillTitleDesEls = document.querySelectorAll("div.skill-wrap p");
const skillRecEls = document.querySelectorAll("div.skill-wrap > div.lastCube div");
const skillIconEls = document.querySelectorAll("div.skill-wrap > div.lastCube img");

// works
let target;

const worksSection = document.querySelector("section.works");
const workList = document.querySelector("section.works > ul.work-list");
let workListEls = document.querySelectorAll("section.works > ul.work-list > li");
const workListElsUnder = document.querySelectorAll("section.works > ul.work-list > li > .underLine");
const bottomBar = document.querySelector(".bottom-bar");
// 워크페이지에서 큐브가 자동으로 회전하게 하기 위한 두가지 id
let timeId = null;
let turnId;
let cubeInterval = null;
let cubeFunction = true;
let bottomBarCheck = true;

// contact
const contactSection = document.querySelector("section.contact");
let value;
let workListid = 0;

// // 페이지 로딩되기 직전 스크롤 맨위로
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// };
// // 페이지가 로당되었을 때 스크롤 막기, 3초후 풀기
// window.onload = function () {
//     body.classList.add('scroll');
//     // loadingCubeCube.classList.add('cube3d');
//     setTimeout(function () {
//         body.classList.remove('scroll');
//         loadingCubeCube.style.transform = 'rotateX(55deg) rotateY(180deg) rotateZ(45deg)';
//         loadingCubeCube.classList.remove('cube3d');
//     }, 3000);
// };

// 우측 내비게이션 클릭 시 해당 value값 위치로 이동
navList[0].addEventListener("click", function () {
  value = 4030;
  window.scrollTo({ top: value, behavior: "smooth" });
});
navList[1].addEventListener("click", function () {
  value = 12010;
  window.scrollTo({ top: value, behavior: "smooth" });
});
navList[2].addEventListener("click", function () {
  value = 14000;
  window.scrollTo({ top: value, behavior: "smooth" });
});
toTop.addEventListener("click", function () {
  value = 0;
  window.scrollTo({ top: value, behavior: "smooth" });
});
cubeLogo.addEventListener("click", function () {
  value = 0;
  window.scrollTo({ top: value, behavior: "smooth" });
});
cubeLogo;

// 패럴랙스 스크롤 이벤트 시작 부분
window.addEventListener("scroll", function () {
  value = window.scrollY;
  console.log(value);

  // 로딩화면 요소 처리
  if (value == 0) {
    loadingCubeCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(45deg)";
  }
  if (value < 400) {
    hello.style.opacity = 100 - value / 4 + "%";
    hello.style.display = "block";
    aboutSpace.style.opacity = 100 - value / 4 + "%";
    aboutSpace.style.display = "block";
    scrollDown.style.opacity = 100 - value / 4 + "%";
    scrollDown.style.display = "block";
    loadingCube.style.opacity = 100 - value / 4 + "%";
    loadingCube.style.transform = "scale(" + (1 - value / 600) + ")";
    loadingCubeCube.style.transform = "rotateX(" + (55 - (value * 55) / 400) + "deg) rotateY(" + (180 - (value * 180) / 400) + "deg) rotateZ(" + (45 - (value * 45) / 400) + "deg)";

    // 메일, 탑버튼 요소
    mail.style.top = 30 + value / 8 + "px";
    mail.style.right = 40 - value / 8 + "px";
    mail.style.transform = "rotate(" + (value * 90) / 400 + "deg)"; // rotate(90deg)
    toTop.style.opacity = value / 4 + "%";

    // 써클 초기화
    circle.style.width = 0 + "px"; //
    circle.style.height = 0 + "px";
    circle.style.borderRadius = 5 + "px";
    circle.style.border = "0";
  } else {
    // 로딩화면 요소 처리
    hello.style.opacity = 0;
    hello.style.display = "none";
    aboutSpace.style.opacity = 0;
    aboutSpace.style.display = "none";
    scrollDown.style.opacity = 0;
    scrollDown.style.display = "none";
    loadingCube.style.opacity = 0;

    // 메일, 탑버튼 요소
    mail.style.top = 80 + "px";
    mail.style.right = -10 + "px";
    mail.style.transform = "rotate(90deg)";
    toTop.style.opacity = 100 + "%";
  }

  // 큐브 로고

  if (value >= 400 && value < 700) {
    cubeLogo.style.opacity = (value - 400) / 3 + "%";
    cubeLogo.style.transform = "scale(" + (0.35 + (value - 400) / 1000) + ")";
    cubeLogoCube.style.transform = "rotateX(" + ((value - 400) * 55) / 300 + "deg) rotateY(" + ((value - 400) * 180) / 300 + "deg) rotateZ(0deg)";
  }
  if (value < 400) {
    cubeLogo.style.opacity = 0 + "%";
    cubeLogo.style.transform = "scale(0.35)";
    cubeLogoCube.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
  }
  if (value >= 700) {
    cubeLogo.style.opacity = 100 + "%";
    cubeLogo.style.transform = "scale(0.65)";
    cubeLogoCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(0deg)";
    cubeLogoCube.classList.add("logoRotate");

    mainSection.style.display = "none";
  } else {
    cubeLogoCube.classList.remove("logoRotate");
    mainSection.style.display = "block";
  }

  //여기부터 오브젝트 놀이 시작

  if (value >= 400 && value < 500) {
    circle.style.width = (value - 400) / 10 + "px";
    circle.style.height = (value - 400) / 10 + "px";
    circle.style.backgroundColor = "#000";
    circle.style.border = "5px solid black";
    circle.style.borderRadius = 5 + "px";
    circle.style.transition = "0.1s";
    circle.style.transform = "translate(-50%, -50%)";
  }

  if (value >= 500) {
    circle.style.width = 10 + "px";
    circle.style.height = 6 + "px";
  }
  if (value >= 500 && 1250 > value) {
    circle.style.border = "3px solid black";
    circle.style.transform = "translate(-50%, -50%)";
    circle.style.transition = "0.1s";
  }
  if (value >= 500 && value < 1500) {
    circle.style.width = 10 + (value - 500) * 3 + "px";
  }
  if (value > 1500) {
    circle.style.width = 3020 + "px";
    circle.style.borderRadius = 0;
  }

  // 라인 멘트 요소
  if (value >= 1250 && value <= 1650) {
    lineMentLeft.style.top = 150 - ((value - 1250) * 140) / 400 + "px";
    lineMentRight.style.bottom = 150 - ((value - 1250) * 160) / 400 + "px";
  } else if (value < 1250 || value > 2300) {
    lineMentLeft.style.top = 150 + "px";
    lineMentRight.style.bottom = 150 + "px";
  } else if (value > 1650 && value <= 1900) {
    lineMentLeft.style.top = 10 + "px";
    lineMentRight.style.bottom = -10 + "px";
  } else if (value > 1900 && value <= 2300) {
    lineMentLeft.style.top = 10 + ((value - 1900) * 140) / 400 + "px";
    lineMentRight.style.bottom = -10 + ((value - 1900) * 160) / 400 + "px";
  }
  if (value > 2300) {
    lineMentBox.style.opacity = 0;
  } else {
    lineMentBox.style.opacity = 1;
  }
  if (value >= 1250 && 2300 > value) {
    // 사각형 크기 물밑작업
    circle.style.overflow = "hidden";
    circle.style.transition = "0s";
    circle.style.backgroundColor = "transparent";
    circle.style.borderRadius = 0;
    circle.style.width = 3020 + "px";
    circle.style.height = 3020 + "px";
    circle.style.border = "6px solid black";
    circle.style.transform = "translate(-50%, -3px)";
  } else {
    circle.style.transition = "0.1s";
  }
  // 라인을 사각형으로 줄어들어 보이게 만드는 모션
  if (value >= 2300 && value <= 3300) {
    circle.style.transition = "0.1s";
    circle.style.width = 3020 - ((value - 2300) / 10) * 26 + "px";
    circle.style.height = 3020 - ((value - 2300) / 10) * 26 + "px";
    circle.style.backgroundColor = "#fff";
    circle.style.border = "10px solid black";
    circle.style.borderRadius = 0;
    circle.style.border = 10 - ((value - 2300) * 8) / 1000 + "px solid black";
    circle.style.transform = "translate(-50%," + (0 - (value - 2300) / 20) + "%)";

    profileImage.style.opacity = -20 + (value - 2300) / 6 + "%";
  }
  if (value >= 2800 && value <= 3300) {
    circle.style.backgroundColor = "#000";
    profileImage.style.transform = "translate(-50%, -50%) scale(" + (1 + (value - 2800) / 250) + ")";
  }
  if (value >= 2300 && value <= 5000) {
  } else {
    profileImage.style.opacity = 0;
    profileImage.style.transform = "translate(-50%, -50%) scale(1)";
  }
  if (value > 3300) {
    circle.style.width = 400 + "px";
    circle.style.height = 400 + "px";
    circle.style.border = 2 + "px solid black";
    circle.style.transform = "translate(-50%, -50%)";

    profileImage.style.opacity = 1;
    profileImage.style.transform = "translate(-50%, -30%) scale(3)";
  }

  // 박스안에서 멘트가 나오는 모션
  if (value >= 3500 && value < 4000) {
    // mentBoxWrap.style.zIndex = 85;
    circle.style.transform = "translate(" + (-50 - (value - 3500) / 10) + "%, " + "-50%)";
    mentBox.style.transform = "translate(" + (-60 - (value - 3500) / 10) + "%, " + "-50%)";
    mentInBox.style.transform = "translate(" + (-50 + (value - 3500) / 9) + "%, " + "-50%)";
  }
  if (value >= 4000 && value < 4500) {
    circle.style.transform = "translate(-100%, -50%)";
    mentBox.style.transform = "translate(-110%, -50%)";
    mentInBox.style.transform = "translate(5%, -50%)";
  }
  if (value < 3500) {
    mentBox.style.transform = "translate(-60%, -50%)";
    mentInBox.style.transform = "translate(-50%, -50%)";
  }
  if (value >= 4500 && value < 5000) {
    circle.style.transform = "translate(" + (-100 + (value - 4500) / 10) + "%, " + "-50%)";
    mentBox.style.transform = "translate(" + (-110 + (value - 4500) / 10) + "%, " + "-50%)";
    mentInBox.style.transform = "translate(" + (5 - (value - 4500) / 9) + "%, " + "-50%)";
  }
  if (value >= 5000) {
    circle.style.transform = "translate(-50%, -50%)";
    circle.style.zIndex = 100;
    mentBox.style.transform = "translate(-60%, -50%)";
    mentInBox.style.transform = "translate(-50%, -50%)";
  }

  // 스킬 소개하기 위해서 커지는 단계
  if (value >= 5000 && value < 5500) {
    circle.style.width = 400 + (value - 5000) * 5 + "px";
    circle.style.height = 400 + (value - 5000) * 5 + "px";
    circle.style.backgroundColor = "#000";

    profileImage.style.transform = "translate(-50%, -30%) scale(" + (3 + -(value - 5000) / 250) + ")";
  }
  if (value >= 5500) {
    body.style.background = "#000";
    circle.style.backgroundColor = "#000";
    circle.style.width = 2900 + "px";
    circle.style.height = 2900 + "px";
    profileImage.style.transform = "translate(-50%, -20%) scale(1)";
    mentBoxWrap.style.display = "none";
  } else {
    body.style.background = "#fff";
    mentBoxWrap.style.display = "block";
  }
  if (value >= 5200 && value < 8200) {
    skillIntro.style.display = "block";
    skillIntro.style.fontSize = (value - 5200) / 4 + "px";
    skillIntroP.style.transform = "scale(" + (1 + (value - 5200) / 1800) + ")";
    if (value >= 6800 && value < 8200) {
      skillIntroP.style.lineHeight = 1.2 + (value - 6800) / 1200;
    } else {
      skillIntroP.style.lineHeight = 1.2;
    }

    profileImage.style.opacity = 100 - (value - 5200) / 10 + "%";
  } else {
    skillIntro.style.display = "none";
  }

  if (value < 5200) {
    skillIntro.style.fontSize = 0 + "px";
    header.style.color = "#000";
    toTop.style.color = "#000";
    toTop.style.border = "1px solid #000";
  } else {
    header.style.color = "#fff";
    toTop.style.color = "#fff";
    toTop.style.border = "1px solid #fff";
  }

  // 여기부터 스킬 시작
  if (value >= 7000) {
    skillWrap.style.display = "flex";
    circle.style.display = "none";
  } else {
    skillWrap.style.display = "none";
    circle.style.display = "flex";
    skillCircle.classList.remove("circleVisible");
    skillLastCube.classList.remove("visible");
    skillBottom.classList.remove("visible");
    skillFront.classList.remove("visible");
    skillBack.classList.remove("visible");
    skillLeft.classList.remove("visible");
    skillRight.classList.remove("visible");
    skillTop.classList.remove("visible");
  }
  if (value >= 7000 && value < 7300) {
    skillLastCube.style.top = 600 - ((value - 7000) * 2) / 3 + "px";
  }
  if (value >= 7060) {
    skillBottom.classList.add("visible");
    skillCircle.classList.add("circleVisible");
    skillCircle.style.opacity = 0.3;
  }
  if (value >= 7300 && value < 7600) {
    skillLastCube.style.top = "400px";
    skillLastCube.style.top = 400 - ((value - 7300) * 2) / 3 + "px";
  }
  if (value >= 7300) {
    skillFront.classList.add("visible");
  }
  if (value >= 7600 && value < 7900) {
    skillLastCube.style.top = "200px";
    skillLastCube.style.top = 200 - ((value - 7600) * 2) / 3 + "px";
  }
  if (value >= 7600) {
    skillBack.classList.add("visible");
  }
  if (value >= 7900 && value < 8200) {
    skillLastCube.style.top = "0px";
    skillLastCube.style.top = 0 - ((value - 7900) * 2) / 3 + "px";
  }
  if (value >= 7900) {
    skillLeft.classList.add("visible");
  }
  if (value >= 8200 && value < 8500) {
    skillLastCube.style.top = "-200px";
    skillLastCube.style.top = -200 - ((value - 8200) * 2) / 3 + "px";
  }
  if (value >= 8200) {
    skillRight.classList.add("visible");
  }
  if (value >= 8500 && value < 8700) {
    skillLastCube.style.top = "-400px";
    skillLastCube.style.top = -400 - (value - 8500) + "px";
  }
  if (value >= 8500) {
    skillTop.classList.add("visible");
  }
  if (value >= 8700) {
    skillLastCube.style.top = "-600px";
  }
  if (value >= 8700 && value < 9200) {
    skillCircle.style.opacity = 0.3 - (value - 8700) / 1000;
    skillLastCube.style.top = -600 + (value - 8700) * 1.1 + "px";
    skillWrap.style.transformOrigin = "center center";
    skillWrap.style.transform = "rotate(" + ((value - 8700) * 7) / 50 + "deg)";
  }
  if (value >= 8700) {
    for (let i = 0; i < skillTitleDesEls.length; i++) {
      skillTitleDesEls[i].style.opacity = 0;
    }
  } else {
    for (let i = 0; i < skillTitleDesEls.length; i++) {
      skillTitleDesEls[i].style.opacity = 1;
    }
    skillWrap.style.transform = "rotate(0deg)";
  }

  // 스킬의 면들을 큐브로 조합시키기

  if (value >= 9200) {
    skillWrap.style.transition = "0.1s";
    skillWrap.style.alignItems = "center";
    skillCircle.style.opacity = 0;
    skillCircle.style.display = "none";

    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.border = "0.1px solid white";
      skillRecEls[i].style.transition = "0.1s";
      skillRecEls[i].style.backgroundColor = "#000";
      skillIconEls[i].style.transform = "scale(0.8) translateZ(1px)";
    }
    skillFront.style.transformOrigin = "top center";
    skillBack.style.transformOrigin = "bottom center";
    skillLeft.style.transformOrigin = "center right";
    skillRight.style.transformOrigin = "center left";
    skillTop.style.transformOrigin = "center left";
  } else {
    skillLastCube.style.transform = "scale(1) translate(0%, 0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    skillFront.style.bottom = -200 + "px";
    skillBack.style.bottom = -416 + "px";
    skillLeft.style.bottom = -654 + "px";
    skillRight.style.bottom = -864 + "px";
    skillTop.style.top = "232px";

    skillWrap.style.alignItems = "stretch";
    skillWrap.style.transition = "0.1s";

    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.border = "none";
      skillRecEls[i].style.transition = "1s";
      skillRecEls[i].style.backgroundColor = "transparent";
      skillIconEls[i].style.transform = "scale(1)";
    }

    skillCircle.style.display = "block";
  }
  if (value >= 9200 && value < 10200) {
    skillWrap.style.transformOrigin = "center center";
    skillWrap.style.transform = "rotate(70deg)";
    skillWrap.style.transform = "rotate(" + (70 - ((value - 9200) * 7) / 100) + "deg)";
    skillLastCube.style.top = (value - 9200) / 20 + "%";
    skillLastCube.style.transform =
      "scale(" +
      (1 + (value - 9200) / 500) +
      ")" +
      "translate(-" +
      ((value - 9200) * 2) / 100 +
      "%, -" +
      (value - 9200) / 20 +
      "%) rotateX(" +
      ((value - 9200) * 55) / 1000 +
      "deg) rotateY(" +
      ((value - 9200) * 180) / 1000 +
      "deg) rotateZ(" +
      ((value - 9200) * 45) / 1000 +
      "deg)";

    // 각 면체 위치 이동 및 90도 꺾기
    skillFront.style.bottom = -200 + (value - 9200) / 5 + "px"; // 200
    skillFront.style.transform = "translate(0%, " + (value - 9200) / 10 + "%) rotateX(" + ((value - 9200) * 9) / 100 + "deg)";
    skillBack.style.bottom = -416 + ((value - 9200) * 52) / 125 + "px"; // 416
    skillBack.style.transform = "translate(0%, " + -(value - 9200) / 10 + "%) rotateX(" + (-(value - 9200) * 9) / 100 + "deg)";
    skillLeft.style.bottom = -654 + ((value - 9200) * 327) / 500 + "px"; // 654
    skillLeft.style.transform = "translate(" + -(value - 9200) / 10 + "%, 0%) rotateY(" + ((value - 9200) * 9) / 100 + "deg)";
    skillRight.style.bottom = -864 + ((value - 9200) * 108) / 125 + "px"; // 864
    skillRight.style.transform = "translate(" + (value - 9200) / 10 + "%, 0%) rotateY(" + (-(value - 9200) * 9) / 100 + "deg)";
    skillRight.style.transformStyle = "preserve-3d";
    skillTop.style.top = 232 - ((value - 9200) * 29) / 125 + "px"; // 232
    skillTop.style.transform = "translate(" + (value - 9200) / 10 + "%, 0%) rotateY(" + (-(value - 9200) * 9) / 100 + "deg)";
  }
  if (value >= 10200) {
    skillWrap.style.transform = "rotate(0deg)";
    skillLastCube.style.transform = "scale(3) translate(-20%, -50%) rotateX(55deg) rotateY(180deg) rotateZ(45deg)";
    skillLastCube.style.top = 50 + "%";
    skillLastCube.style.left = 50 + "%";

    // 각 면체 위치 이동 및 90도 꺾기
    skillFront.style.bottom = "0px";
    skillFront.style.transform = "translate(0%, 100%) rotateX(90deg)";
    skillBack.style.bottom = "0px";
    skillBack.style.transform = "translate(0%, -100%) rotateX(-90deg)";
    skillLeft.style.bottom = "0px";
    skillLeft.style.transform = "translate(-100%, 0%) rotateY(90deg)";
    skillRight.style.bottom = "0px";
    skillRight.style.transform = "translate(100%, 0%) rotateY(-90deg)";
    skillTop.style.bottom = "0px";
    skillTop.style.left = "-1px";
    skillTop.style.top = "-1px";
    skillTop.style.transform = "translate(100%, 0%) rotateY(-90deg)";
  } else {
    skillTop.style.left = "0";
  }

  // 큐브 뒤집기기 전 높이 살짝 올리기
  if (value >= 10200 && value < 10500) {
    skillWrap.style.transform = "rotate(0deg) translate(0%, " + -(value - 10200) / 30 + "%)";
  }
  if (value >= 10500) {
    skillWrap.style.transform = "rotate(0deg) translate(0%, -10%)";
    skillIconEls[0].src = "./images/thumb-medi.jpg";
    skillIconEls[1].src = "./images/thumb-rocky.jpg";
    skillIconEls[2].src = "./images/thumb-nemo.jpg";
    skillIconEls[3].src = "./images/thumb-vivid.jpg";
    skillIconEls[4].src = "./images/thumb-over.jpg";
    skillIconEls[5].src = "./images/thumb-photo.jpg";
    for (let i = 0; i < skillRecEls.length; i++) {
      skillIconEls[i].style.transform = "scale(0.95) translateZ(0.05px)";
    }
  } else {
    skillIconEls[0].src = "./images/logo/html_logo.png";
    skillIconEls[1].src = "./images/logo/css_logo.png";
    skillIconEls[2].src = "./images/logo/javascript_logo.png";
    skillIconEls[3].src = "./images/logo/jquery_logo.png";
    skillIconEls[4].src = "./images/logo/react_logo.png";
    skillIconEls[5].src = "./images/logo/postcss_logo.png";

    // 각 면체 높이 넓이 조정
    skillLastCube.style.width = 50 + "px";
    skillLastCube.style.height = 50 + "px";
    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.width = 50 + "px";
      skillRecEls[i].style.height = 50 + "px";
    }
  }

  // 큐브 뒤집기
  if (value >= 10500 && value < 11500) {
    skillLastCube.style.transform =
      "scale(3)" + "translate(-20%, -50%)" + "rotateX(" + (55 + ((value - 10500) * 9) / 50) + "deg) rotateY(" + 180 + "deg) rotateZ(" + (45 + ((value - 10500) * 9) / 50) + "deg)";
    skillWrap.style.transform = "rotate(0deg) translate(0%, " + (-10 + (value - 10500) / 100) + "%)";

    // 각 면체 위치 이동 및 90도 꺾기
    skillFront.style.transform = "translate(0%, 100%) rotateX(" + (90 - ((value - 10500) * 9) / 50) + "deg)";
    skillBack.style.transform = "translate(0%, -100%) rotateX(" + (-90 + ((value - 10500) * 9) / 50) + "deg)";
    skillLeft.style.transform = "translate(-100%, 0%) rotateY(" + (90 - ((value - 10500) * 9) / 50) + "deg)";
    skillRight.style.transform = "translate(100%, 0%) rotateY(" + (-90 + ((value - 10500) * 9) / 50) + "deg)";
    skillRight.style.transformStyle = "preserve-3d";
    skillTop.style.transform = "translate(100%, 0%) rotateY(" + (-90 + ((value - 10500) * 9) / 50) + "deg)";

    // 각 면체 높이 넓이 조정
    skillLastCube.style.width = 50 + (value - 10500) / 10 + "px";
    skillLastCube.style.height = 50 + (value - 10500) / 10 + "px";
    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.width = 50 + (value - 10500) / 10 + "px";
      skillRecEls[i].style.height = 50 + (value - 10500) / 10 + "px";
    }
  }

  if (value >= 11500) {
    skillLastCube.style.transform = "scale(3) translate(-20%, -50%) rotateX(235deg) rotateY(180deg) rotateZ(225deg)";
    skillWrap.style.transform = "rotate(0deg) translate(0%, 0%)";
    // 각 면체 위치 이동 및 90도 꺾기
    skillFront.style.transform = "translate(0%, 100%) rotateX(-90deg)";
    skillBack.style.transform = "translate(0%, -100%) rotateX(90deg)";
    skillLeft.style.transform = "translate(-100%, 0%) rotateY(-90deg)";
    skillRight.style.transform = "translate(100%, 0%) rotateY(90deg)";
    skillTop.style.transform = "translate(100%, 0%) rotateY(90deg)";

    // 각 면체 높이 넓이 조정
    skillLastCube.style.width = 150 + "px";
    skillLastCube.style.height = 150 + "px";
    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.width = 150 + "px";
      skillRecEls[i].style.height = 150 + "px";
    }

    worksSection.style.display = "block";
  } else {
    worksSection.style.display = "none";
  }
  if (value >= 11500 && value < 12000) {
    skillLastCube.style.top = 50 - (value - 11500) / 50 + "%";
    skillLastCube.style.transform =
      "scale(3) translate(" +
      (-20 - ((value - 11500) * 60) / 500) +
      "%, " +
      -50 +
      "%) rotateX(" +
      (235 + ((value - 11500) * 30) / 500) +
      "deg) rotateY(180deg) rotateZ(" +
      (225 + ((value - 11500) * 40) / 500) +
      "deg)";
  }
  if (value >= 12000) {
    skillLastCube.style.top = 40 + "%";
    skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(265deg) rotateY(180deg) rotateZ(265deg)";
    skillWrap.style.transform = "rotate(0deg) translate(0%, 0%)";
    workList.classList.add("visible");
    worksSection.style.pointerEvents = "auto";
  } else {
    workList.classList.remove("visible");
    skillWrap.style.backgroundImage = "none";
    worksSection.style.pointerEvents = "none";
  }
  // work-list 등장

  if (value >= 12000 && value < 12700) {
    cubeInterval = 3000;
    if (bottomBarCheck == true) {
      bottomBar.classList.add("active");
    }

    if (cubeFunction == true) {
      StartTime();
    }
    cubeFunction = false;
    skillLastCube.style.transition = ".3s ease-in";
    skillWrap.style.backgroundImage = `url("./images/back/background${1}.png")`;

    // 워크리스트에 마우스를 올리고 내렸을 때
    for (let i = 0; i < workListEls.length; i++) {
      workListEls[i].style.pointerEvents = "auto";
      workListEls[i].style.transition = "0.3s ease-in";
      workListEls[i].addEventListener("mouseenter", (e) => {
        bottomBarCheck = false;
        bottomBar.classList.remove("active");
        target = e.currentTarget;
        workListid = i;

        for (let j = 0; j < workListEls.length; j++) {
          workListEls[j].classList.remove("active");
        }
        workListEls[i].classList.add("active");

        target === workListEls[0] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(265deg) rotateY(180deg) rotateZ(265deg)");
        target === workListEls[1] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(265deg) rotateY(180deg) rotateZ(175deg)");
        target === workListEls[2] && (skillLastCube.style.transform = "scale(3) translate(-76%, 4.5%) rotateX(175deg) rotateY(175deg) rotateZ(270deg)");
        target === workListEls[3] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(265deg) rotateY(180deg) rotateZ(85deg)");
        target === workListEls[4] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(265deg) rotateY(180deg) rotateZ(355deg)");
        target === workListEls[5] && (skillLastCube.style.transform = "scale(3) translate(-84.5%, -4.5%) rotateX(355deg) rotateY(185deg) rotateZ(270deg)");
        target === workListEls[i] && (skillWrap.style.backgroundImage = `url("./images/back/background${i + 1}.png")`);
      });
      workListEls[i].addEventListener("mouseleave", () => {
        bottomBarCheck = true;
        bottomBar.classList.add("active");
      });
    }
  } else {
    cubeInterval = null;
    StopTime();
    skillLastCube.style.transition = ".1s";
    for (let i = 0; i < workListEls.length; i++) {
      workListEls[i].style.pointerEvents = "none";
      workListEls[i].classList.remove("active");
    }
    bottomBar.classList.remove("active");
    timeId = null;

    cubeFunction = true;
  }

  // 콘택트 페이지 등장
  if (value < 12700) {
    contactSection.style.display = "none";
    contactSection.style.width = 0 + "vw";
  }

  if (value >= 12700 && value < 14000) {
    contactSection.style.display = "block";
    contactSection.style.width = (value - 12700) / 13 + "vw";
  }

  if (value >= 14000) {
    contactSection.style.display = "block";
    contactSection.style.width = 100 + "vw";
  }
  if (value > 13400) {
    cubeLogoCube.classList.remove("logoRotate");
    cubeLogoCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(0deg)";
  } else {
    cubeLogoCube.classList.add("logoRotate");
    cubeLogo.style.top = "3%";
    for (let i = 0; i < cubeLogoCubeDiv.length; i++) {
      cubeLogoCubeDiv[i].style.border = "2px solid rgb(0, 0, 0)";
    }
  }

  if (value > 13400 && value < 13900) {
    cubeLogo.style.transform = " scale(" + (0.65 + ((value - 13400) * 7) / 500) + ")";
    cubeLogoCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(" + ((value - 13400) * 135) / 500 + "deg)";
    cubeLogo.style.top = 3 + ((value - 13400) * 47) / 500 + "%";
    for (let i = 0; i < cubeLogoCubeDiv.length; i++) {
      cubeLogoCubeDiv[i].style.border = 2 - (value - 13400) / 500 + "px solid rgb(0, 0, 0)";
    }
  }

  if (value >= 13900) {
    cubeLogo.style.transform = "scale(7.65)";
    cubeLogoCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(135deg)";
    cubeLogo.style.top = "50%";
    for (let i = 0; i < cubeLogoCubeDiv.length; i++) {
      cubeLogoCubeDiv[i].style.border = "1px solid rgb(0, 0, 0)";
    }
  }

  // 13900보다 커질시에 글자색 변경
  if (value >= 13900) {
    header.style.color = "#000";
    toTop.style.color = "#000";
    toTop.style.border = "1px solid #000";
  }
});

// 스크롤 이벤트 밖에서 실행되는 값

// value >= 12000 && value < 12700 에서 워크리스트 이벤트
for (let i = 0; i < workListEls.length; i++) {
  workListEls[i].addEventListener("mouseenter", () => {
    StopTime();
  });
  workListEls[i].addEventListener("mouseleave", () => {
    turnId = i;
    turnId++;
    if (turnId == 6) {
      turnId = 0;
    }
    cubeFunction = true;
    StartTime();
  });
}
