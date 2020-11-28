// "use strict";

// main
const body = document.querySelector("body");
const circle = document.querySelector(".circle");
const mainSection = document.querySelector("section.main");
const mail = document.querySelector(".mail");
const mailColor = document.querySelector("header > nav > a");
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
const loadingCubeRec = document.querySelectorAll("section.loading-cube > div.cube div");
// about
const lineMentLeft = document.querySelector("div.line-ment > .left > p ");
const lineMentRight = document.querySelector("div.line-ment > .right > p ");
const lineMentBox = document.querySelector(".line-ment");

const floatText1 = document.querySelector("article.float-text > h2.p1");
const floatText2 = document.querySelector("article.float-text > h2.p2");

const selfIntro = document.querySelector("div.self-intro");
const selfRec1 = document.querySelector("div.self-intro > .rec1");
const selfRec2 = document.querySelector("div.self-intro > .rec2");
const selfRec3 = document.querySelector("div.self-intro > .rec3");
const selfP = document.querySelector("div.self-intro > .rec1 > p");
const profileImage = document.querySelector("div.self-intro > .rec1 > img.profile-image");

const skillIntro = document.querySelector("div.skill-intro");
const skillIntroP = document.querySelector("div.skill-intro > p ");
const skillCircle = document.querySelector("div.centerCircle");
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

// pop-up
const popUp = document.querySelector("section.popup");
const popUpWin = document.querySelectorAll(".pop-win");
const popClose = document.querySelectorAll(".pop-close");

// contact
const contactSection = document.querySelector("section.contact");
let value;
let workListid = 0;

// // 페이지 로딩되기 직전 스크롤 맨위로
window.onbeforeunload = function () {
  // window.scrollTo(0, 0);
};
// // 페이지가 로당되었을 때 스크롤 막기, 3초후 풀기
window.onload = function () {
  // body.classList.add("scroll");
  loadingCubeCube.classList.add("cube3d");
  mainSection.classList.add("shown");
  header.classList.add("shown");

  setTimeout(function () {
    // body.classList.remove("scroll");
    loadingCubeCube.style.transform = "rotateX(61deg) rotateY(153deg) rotateZ(53deg) scale3d(5, 5, 5)";
    loadingCubeCube.classList.remove("cube3d");
    skillCircle.classList.remove("circleVisible");
  }, 2600);
  setTimeout(function () {
    mainSection.classList.remove("shown");
    header.classList.remove("shown");
  }, 3300);
};

// 우측 내비게이션 클릭 시 해당 value값 위치로 이동
navList[0].addEventListener("click", function () {
  value = 1750;
  window.scrollTo({ top: value, behavior: "smooth" });
});
navList[1].addEventListener("click", function () {
  value = 13310;
  window.scrollTo({ top: value, behavior: "smooth" });
});
navList[2].addEventListener("click", function () {
  value = 16300;
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
    loadingCubeCube.style.transform = "rotateX(61deg) rotateY(153deg) rotateZ(53deg) scale3d(5, 5, 5)";
  }
  if (value < 400) {
    hello.style.opacity = 100 - value / 4 + "%";
    hello.style.display = "block";
    aboutSpace.style.opacity = 100 - value / 4 + "%";
    aboutSpace.style.display = "block";
    scrollDown.style.opacity = 100 - value / 4 + "%";
    scrollDown.style.display = "block";
    loadingCube.style.opacity = 100 - value / 4 + "%";
    loadingCube.style.transform = "scale(" + (1 - value / 500) + ")";
    loadingCubeCube.style.transform = "rotateX(" + (61 - (value * 61) / 400) + "deg) rotateY(" + (153 - (value * 153) / 400) + "deg) rotateZ(" + (53 - (value * 53) / 400) + "deg) scale3d(5, 5, 5)";
    body.style.backgroundColor = "#181818";
    // 메일, 탑버튼 요소
    mail.style.top = 60 + value / 8 + "px";
    mail.style.right = 50 - value / 8 + "px";
    mail.style.transform = "rotate(" + (value * 90) / 400 + "deg)"; // rotate(90deg)

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
    mail.style.top = 110 + "px";
    mail.style.right = 0 + "px";
    mail.style.transform = "rotate(90deg)";
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
    circle.style.backgroundColor = "#181818";
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
    // circle.style.width = 10 + (value - 500) * 3 + "px";
    circle.style.width = `calc(10px + ((${value} - 500) / 8 * 1vw))`;
    circle.style.borderRadius = 5 + "px";
  }
  if (value > 1500) {
    circle.style.width = 100 + "vw";
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
    // mentBoxWrap.style.opacity = 1;
  } else {
    lineMentBox.style.opacity = 1;
    // mentBoxWrap.style.opacity = 0;
  }
  if (value >= 1500 && 2300 > value) {
    // 사각형 크기 물밑작업
    circle.style.borderRadius = 0;
    circle.style.border = "3px solid black";
  }
  // 라인을 사각형으로 줄어들어 보이게 만드는 모션
  if (value >= 2300 && value < 3300) {
    circle.style.backgroundColor = "#181818";
    circle.style.height = `calc(6px + ((${value} - 2300) / 10 * 1vh))`;
  } else if (value >= 3300) {
    circle.style.height = 100 + "vh";
  } else if (value >= 500 && value < 2300) {
    circle.style.height = 6 + "px";
  }
  // 가운데 빅 타이포 폰트사이즈 키우기
  if (value >= 2900 && value < 5500) {
    skillIntro.style.opacity = (value - 2900) / 3 + "%";
    skillIntro.style.fontSize = (value - 2900) / 2.2 + "px";
    skillIntro.style.display = "block";
    if (value >= 3200 && value < 5500) {
      skillIntroP.style.lineHeight = 1.2 + (value - 3200) / 2500;
    } else {
      skillIntroP.style.lineHeight = 1.2;
    }
  } else {
    skillIntro.style.display = "none";
  }
  if (value < 2900) {
    skillIntro.style.fontSize = 0 + "px";
    skillIntro.style.opacity = 0;
  }
  if (value >= 5500) {
    skillIntro.style.fontSize = 10000 + "px";
    skillIntro.style.opacity = 0;
    skillIntroP.style.lineHeight = 2;
  }
  // 배경의 원
  if (value < 400) {
    // skillCircle.classList.add("circleVisible");
    skillCircle.style.opacity = 0.3 - value / 400 / 3;
  } else if (value >= 400 && value < 3200) {
    skillCircle.style.opacity = 0;
  } else if (value >= 3200 && value < 3600) {
    skillCircle.style.opacity = ((value - 3200) / 400) * 0.3;

    // skillCircle.classList.add("circleVisible");
    // skillCircle.style.opacity = 0.3;
  } else if (value >= 3600 && value < 10000) {
    skillCircle.style.opacity = 0.3;
    // skillCircle.classList.remove("circleVisible");
  } else if (value >= 10000 && value < 10500) {
    skillCircle.style.opacity = 0.3 - (value - 10000) / 1000;
  } else if (value >= 10500) {
    skillCircle.style.opacity = 0;
  } else if (value == 0) {
    skillCircle.style.opacity = 0.3;
  }
  if (value >= 3200) {
    body.style.background = "#181818";
  }
  if (value < 400) {
    skillCircle.style.width = "40vw";
    skillCircle.style.height = "40vw";
  } else {
    skillCircle.style.width = "65vw";
    skillCircle.style.height = "65vw";
  }

  // 플롯 텍스트
  if (value >= 4800 && value < 5100) {
    floatText1.style.opacity = (value - 4800) / 3 + "%";
  }
  if (value >= 5500 && value < 5800) {
    floatText1.style.opacity = 100 - (value - 5500) / 3 + "%";
  }
  if (value < 4800 || value >= 5800) {
    floatText1.style.opacity = 0;
  }
  if (value >= 4800 && value < 5800) {
    floatText1.style.top = 120 - (value - 4800) / 4 + "px";
  }

  if (value >= 8100 && value < 8400) {
    floatText2.style.opacity = (value - 8100) / 3 + "%";
  }
  if (value >= 9600 && value < 9900) {
    floatText2.style.opacity = 100 - (value - 9600) / 3 + "%";
  }
  if (value < 8100 || value >= 9900) {
    floatText2.style.opacity = 0;
  }
  if (value >= 8100 && value < 9900) {
    floatText2.style.top = 200 - (value - 8100) / 4 + "px";
  }

  // 자기소개 사각형
  //s0
  if (value < 4000) {
    selfRec1.style.top = 50 + "%";
    selfRec1.style.left = 110 + "%";
    selfRec1.style.transform = `translate(0%, -50%) rotate(0deg)`;
    selfRec1.style.border = `3px solid #bcbcbc`;
    //
    selfRec2.style.top = 110 + "%";
    selfRec2.style.left = 20 + "%";
    selfRec2.style.width = `350px`;
    selfRec2.style.transform = `translate(-50%, 0%) rotate(0deg) scale(1)`;
    selfRec2.style.border = `3px solid #bcbcbc`;
    //
    selfRec3.style.top = -10 + "%";
    selfRec3.style.left = 80 + "%";
    selfRec3.style.transform = `translate(-50%, -100%) rotate(0deg) scale(1)`;
    selfRec3.style.border = `3px solid #bcbcbc`;
  }
  // s1
  if (value >= 4000 && value < 5000) {
    selfRec1.style.left = 110 - ((value - 4000) * 6) / 100 + "%"; // 110 - 60 = 50
    selfRec1.style.transform = `translate(${-(value - 4000) / 10}%, -50%) rotate(${(-(value - 4000) * 360) / 1000}deg)`; // tl -100%, -50% .. r -360deg
    //
    selfRec2.style.top = 110 - ((value - 4000) * 6) / 100 + "%"; // 110 - 60 = 50
    selfRec2.style.left = 20 + ((value - 4000) * 3) / 100 + "%"; // 20 + 30 = 50
    selfRec2.style.transform = `translate(${-50 - ((value - 4000) * 125) / 1000}%, ${(-(value - 4000) * 125) / 1000}%) rotate(${(-(value - 4000) * 360) / 1000}deg) scale(${1 - ((value - 4000) / 1000) * 0.8})`; // tl -175%, -125% r -360deg s 0.2
    selfRec2.style.border = `${3 + ((value - 4000) / 1000) * 7}px solid #bcbcbc`;
    //
    selfRec3.style.top = -10 + ((value - 4000) * 6) / 100 + "%"; // -10 + 60 = 50
    selfRec3.style.left = 80 - ((value - 4000) * 3) / 100 + "%"; // 80 - 30 = 50
    selfRec3.style.transform = `translate(${-50 + ((value - 4000) * 125) / 1000}%, ${-100 + ((value - 4000) * 125) / 1000}%) rotate(${(-(value - 4000) * 360) / 1000}deg) scale(${1 - ((value - 4000) / 1000) * 0.8})`; // tl 75%, 25% .. r -360deg s 0.2
    selfRec3.style.border = `${3 + ((value - 4000) / 1000) * 7}px solid #bcbcbc`;
  }

  // s2
  if (value >= 5000 && value < 5200) {
    selfRec1.style.left = 50 + "%"; //  50
    selfRec1.style.transform = "translate(-100%, -50%) rotate(-360deg)"; // tl -100%, -50% .. r -360deg
    //
    selfRec2.style.top = 50 + "%"; // 110 - 60 = 50
    selfRec2.style.left = 50 + "%"; // 20 + 30 = 50
    selfRec2.style.transform = `translate(-175%, -125%) rotate(${-360 - ((value - 5000) * 360) / 1000}deg) scale(0.2)`; // tl -175%, -125% r -540deg s 0.2
    selfRec2.style.border = `10px solid #bcbcbc`;
    //
    selfRec3.style.top = 50 + "%"; // -10 + 60 = 50
    selfRec3.style.left = 50 + "%"; // 80 - 30 = 50
    selfRec3.style.transform = `translate(75%, 25%) rotate(${-360 - ((value - 5000) * 360) / 1000}deg) scale(0.2)`; // tl 75%, 25% .. r -540deg s 0.2
    selfRec3.style.border = `10px solid #bcbcbc`;
    //
    selfP.style.opacity = (value - 5000) / 2 + "%";
    profileImage.style.opacity = (value - 5000) / 2 + "%";
  } else if (value < 5000) {
    selfP.style.opacity = 0;
    profileImage.style.opacity = 0;
  } else if (value >= 5200) {
    selfRec1.style.left = 50 + "%"; //  50
    selfRec2.style.top = 50 + "%"; // 110 - 60 = 50
    selfRec2.style.left = 50 + "%"; // 20 + 30 = 50
    selfRec3.style.top = 50 + "%"; // -10 + 60 = 50
    selfRec3.style.left = 50 + "%"; // 80 - 30 = 50
  }
  if (value >= 5200 && value < 5500) {
    selfRec1.style.transform = "translate(-100%, -50%) rotate(-360deg)"; // tl -100%, -50% .. r -360deg
    //
    selfRec2.style.transform = `translate(-175%, -125%) rotate(${-432 - ((value - 5200) * 360) / 1000}deg) scale(0.2)`; // tl -175%, -125% r -720deg s 0.2
    selfRec2.style.border = `10px solid #bcbcbc`;
    //
    selfRec3.style.transform = `translate(75%, 25%) rotate(${-432 - ((value - 5200) * 360) / 1000}deg) scale(0.2)`; // tl 75%, 25% .. r -720deg s 0.2
    selfRec3.style.border = `10px solid #bcbcbc`;
    //
    selfP.style.opacity = 100 + "%";
    profileImage.style.opacity = 100 + "%";
  }
  // s3
  if (value >= 5500 && value < 5700) {
    selfP.style.opacity = 100 - (value - 5500) / 2 + "%";
    profileImage.style.opacity = 100 - (value - 5500) / 2 + "%";
  } else if (value >= 5700) {
    selfP.style.opacity = 0;
    profileImage.style.opacity = 0;
  }
  if (value >= 5500 && value < 6000) {
    selfRec1.style.transform = `translate(${-100 - ((value - 5500) * 75) / 500}%, -50%) rotate(-360deg) scale(${1 - ((value - 5500) / 500) * 0.8})`;
    selfRec1.style.border = `${3 + ((value - 5500) * 7) / 500}px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(${-175 + ((value - 5500) * 125) / 500}%, -125%) rotate(-540deg) scale(${0.2 + ((value - 5500) / 500) * 0.8})`;
    selfRec2.style.border = `${10 - ((value - 5500) * 7) / 500}px solid #bcbcbc`;
    //
    selfRec3.style.transform = `translate(75%, 25%) rotate(${-540 - ((value - 5500) * 360) / 1000}deg) scale(0.2)`;
    selfRec3.style.border = `10px solid #bcbcbc`;
  }
  // s4
  if (value >= 6000 && value < 6500) {
    selfRec1.style.transform = `translate(-175%, ${-50 - ((value - 6000) * 75) / 500}%) rotate(${-360 - ((value - 6000) * 360) / 1000}deg) scale(0.2)`;
    selfRec1.style.border = `10px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(-50%, ${-125 + ((value - 6000) * 75) / 500}%) rotate(-540deg) scale(1)`;
    selfRec2.style.border = `3px solid #bcbcbc`;
    selfRec2.style.width = `${350 + ((value - 6000) * 350) / 500}px`;
    //
    selfRec3.style.transform = `translate(75%, 25%) rotate(${-720 - ((value - 6000) * 360) / 1000}deg) scale(0.2)`;
    selfRec3.style.border = `10px solid #bcbcbc`;
  }
  // s5 정지
  if (value >= 6500 && value < 7000) {
    selfRec1.style.transform = `translate(-175%, -125%) rotate(${-540 - ((value - 6500) * 360) / 1000}deg) scale(0.2)`;
    selfRec1.style.border = `10px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(-50%, -50%) rotate(-540deg) scale(1)`;
    selfRec2.style.border = `3px solid #bcbcbc`;
    selfRec2.style.width = `700px`;
    //
    selfRec3.style.transform = `translate(75%, 25%) rotate(${-900 - ((value - 6500) * 360) / 1000}deg) scale(0.2)`;
    selfRec3.style.border = `10px solid #bcbcbc`;
  }
  // s5
  if (value >= 7000 && value < 7500) {
    selfRec1.style.transform = `translate(-175%, -125%) rotate(${-720 - ((value - 7000) * 360) / 1000}deg) scale(0.2)`;
    selfRec1.style.border = `10px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(-50%, ${-50 + ((value - 7000) * 75) / 500}%) rotate(-540deg) scale(1)`;
    selfRec2.style.border = `3px solid #bcbcbc`;
    selfRec2.style.width = `${700 - ((value - 7000) * 350) / 500}px`;
    //
    selfRec3.style.transform = `translate(75%, ${25 - ((value - 7000) * 75) / 500}%) rotate(${-1080 - ((value - 7000) * 360) / 1000}deg) scale(0.2)`;
    selfRec3.style.border = `10px solid #bcbcbc`;
  }
  // s6
  if (value >= 7500 && value < 8000) {
    selfRec1.style.transform = `translate(-175%, -125%) rotate(${-900 - ((value - 7500) * 360) / 1000}deg) scale(0.2)`;
    selfRec1.style.border = `10px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(${-50 + ((value - 7500) * 125) / 500}%, 25%) rotate(-540deg) scale(${1 - ((value - 7500) / 500) * 0.8})`;
    selfRec2.style.border = `${3 + ((value - 7500) * 7) / 500}px solid #bcbcbc`;
    selfRec2.style.width = `350px`;
    //
    selfRec3.style.transform = `translate(${75 - ((value - 7500) * 125) / 500}%, -50%) rotate(-1260deg) scale(${0.2 + ((value - 7500) / 500) * 0.8})`;
    selfRec3.style.border = `${10 - ((value - 7500) * 7) / 500}px solid #bcbcbc`;
  }
  // s7
  if (value >= 8000 && value < 8200) {
    selfRec1.style.transform = `translate(${-175 + ((value - 8000) * 65) / 200}%, ${-125 + ((value - 8000) * 15) / 200}%) rotate(-1080deg) scale(0.2)`;
    selfRec1.style.border = `10px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(${75 - ((value - 8000) * 65) / 200}%, ${25 - ((value - 8000) * 15) / 200}%) rotate(-540deg) scale(0.2)`;
    selfRec2.style.border = `10px solid #bcbcbc`;
    selfRec2.style.width = `350px`;
    //
    selfRec3.style.transform = `translate(-50%, -50%) rotate(-1260deg) scale(1)`;
    selfRec3.style.border = `3px solid #bcbcbc`;
  }
  // s8
  if (value >= 8200 && value < 8500) {
    selfRec1.style.transform = `translate(${-110 - (value - 8200) / 6}%, ${-110 - (value - 8200) / 2}%) rotate(-1080deg) scale(0.2)`;
    selfRec1.style.border = `10px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(${10 + (value - 8200) / 1.2}%, ${10 + (value - 8200) / 2}%) rotate(-540deg) scale(0.2)`;
    selfRec2.style.border = `10px solid #bcbcbc`;
    selfRec2.style.width = `350px`;
    //
    selfRec3.style.transform = `translate(${-50 + (value - 8200) / 3}%, -50%) rotate(-1260deg) scale(${1 + ((value - 8200) / 300) * 3})`;
    selfRec3.style.border = `${3 - ((value - 8200) * 2) / 300}px solid #bcbcbc`;
    //
    selfIntro.style.opacity = 100 - (value - 8200) / 3 + "%";
  }
  if (value > 8500) {
    selfRec1.style.transform = `translate(-160%, -260%) rotate(-1080deg) scale(0.2)`;
    selfRec1.style.border = `10px solid #bcbcbc`;
    //
    selfRec2.style.transform = `translate(70%, 160%) rotate(-540deg) scale(0.2)`;
    selfRec2.style.border = `10px solid #bcbcbc`;
    selfRec2.style.width = `350px`;
    //
    selfRec3.style.transform = `translate(50%, -50%) rotate(-1260deg) scale(4)`;
    selfRec3.style.border = `1px solid #bcbcbc`;
    //
    selfIntro.style.opacity = 0 + "%";
  }
  if (value >= 4000 && value < 8200) {
    selfIntro.style.opacity = 100 + "%";
  }

  //-------------------------------------------------------

  // 컬러 조정
  if (value >= 3300) {
    body.style.background = "#181818";
  } else if (value < 3300 && value >= 400) {
    body.style.background = "#fff";
  } else if (value < 400) {
    body.style.background = "#181818";
  }
  if (value < 3100 && value >= 400) {
    // skillIntro.style.fontSize = 0 + "px";
    header.style.color = "#000";
    mailColor.style.color = "#000";
    toTop.style.color = "#000";
    toTop.style.border = "1px solid #000";
  } else if (value < 400) {
    header.style.color = "#fff";
    toTop.style.color = "#fff";
    mailColor.style.color = "#fff";
    toTop.style.border = "1px solid #fff";
  } else {
    header.style.color = "#fff";
    toTop.style.color = "#fff";
    mailColor.style.color = "#fff";
    toTop.style.border = "1px solid #fff";
  }

  // 여기부터 스킬 시작
  if (value >= 8300) {
    skillWrap.style.display = "flex";
    circle.style.display = "none";
    body.style.background = "#181818";
  } else {
    skillWrap.style.display = "none";
    circle.style.display = "flex";
    skillLastCube.classList.remove("visible");
    skillBottom.classList.remove("visible");
    skillFront.classList.remove("visible");
    skillBack.classList.remove("visible");
    skillLeft.classList.remove("visible");
    skillRight.classList.remove("visible");
    skillTop.classList.remove("visible");
  }
  if (value >= 8300 && value < 8600) {
    skillLastCube.style.top = 600 - ((value - 8300) * 2) / 3 + "px";
  }
  if (value >= 8360) {
    skillBottom.classList.add("visible");
  }
  if (value >= 8600 && value < 8900) {
    skillLastCube.style.top = "400px";
    skillLastCube.style.top = 400 - ((value - 8600) * 2) / 3 + "px";
  }
  if (value >= 8600) {
    skillFront.classList.add("visible");
  }
  if (value >= 8900 && value < 9200) {
    skillLastCube.style.top = "200px";
    skillLastCube.style.top = 200 - ((value - 8900) * 2) / 3 + "px";
  }
  if (value >= 8900) {
    skillBack.classList.add("visible");
  }
  if (value >= 9200 && value < 9500) {
    skillLastCube.style.top = "0px";
    skillLastCube.style.top = 0 - ((value - 9200) * 2) / 3 + "px";
  }
  if (value >= 9200) {
    skillLeft.classList.add("visible");
  }
  if (value >= 9500 && value < 9800) {
    skillLastCube.style.top = "-200px";
    skillLastCube.style.top = -200 - ((value - 9500) * 2) / 3 + "px";
  }
  if (value >= 9500) {
    skillRight.classList.add("visible");
  }
  if (value >= 9800 && value < 10000) {
    skillLastCube.style.top = "-400px";
    skillLastCube.style.top = -400 - (value - 9800) + "px";
  }
  if (value >= 9800) {
    skillTop.classList.add("visible");
  }
  if (value >= 10000) {
    skillLastCube.style.top = "-600px";
  }
  if (value >= 10000 && value < 10500) {
    skillLastCube.style.top = -600 + (value - 10000) * 1.1 + "px";
    skillWrap.style.transformOrigin = "center center";
    skillWrap.style.transform = "rotate(" + ((value - 10000) * 7) / 50 + "deg)";
  }
  if (value >= 10000) {
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

  if (value >= 10500) {
    skillWrap.style.transition = "0.1s";
    skillWrap.style.alignItems = "center";

    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.border = "0.1px solid rgb(180, 180, 180)";
      skillRecEls[i].style.transition = "0.1s";
      skillRecEls[i].style.backgroundColor = "#181818";
      skillIconEls[i].style.transform = "scale(0.8) translateZ(1px)";
    }
    skillFront.style.transformOrigin = "top center";
    skillBack.style.transformOrigin = "bottom center";
    skillLeft.style.transformOrigin = "center right";
    skillRight.style.transformOrigin = "center left";
    skillTop.style.transformOrigin = "center left";
  } else {
    skillLastCube.style.transform = "scale(1) translate(0%, 0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    // 각 면체 위치 이동 및 원위치
    skillFront.style.bottom = -200 + "px"; // 200
    skillFront.style.transform = "translate(0%, 0%) rotateX(0deg)";
    skillBack.style.bottom = -416 + "px"; // 416
    skillBack.style.transform = "translate(0%, 0%) rotateX(0deg)";
    skillLeft.style.bottom = -654 + "px"; // 654
    skillLeft.style.transform = "translate(0%, 0%) rotateY(0deg)";
    skillRight.style.bottom = -864 + "px"; // 864
    skillRight.style.transform = "translate(0%, 0%) rotateY(0deg)";
    skillTop.style.top = 232 + "px"; // 232
    skillTop.style.transform = "translate(0%, 0%) rotateY(0deg)";

    skillWrap.style.alignItems = "stretch";
    skillWrap.style.transition = "0.1s";

    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.border = "none";
      skillRecEls[i].style.transition = "1s";
      skillRecEls[i].style.backgroundColor = "transparent";
      skillIconEls[i].style.transform = "scale(1)";
    }
  }
  if (value >= 10500 && value < 11500) {
    skillWrap.style.transformOrigin = "center center";
    skillWrap.style.transform = "rotate(70deg)";
    skillWrap.style.transform = "rotate(" + (70 - ((value - 10500) * 7) / 100) + "deg)";
    skillLastCube.style.top = (value - 10500) / 20 + "%";
    skillLastCube.style.transform = "scale(" + (1 + (value - 10500) / 500) + ")" + "translate(-" + ((value - 10500) * 2) / 100 + "%, -" + (value - 10500) / 20 + "%) rotateX(" + ((value - 10500) * 55) / 1000 + "deg) rotateY(" + ((value - 10500) * 180) / 1000 + "deg) rotateZ(" + ((value - 10500) * 45) / 1000 + "deg)";

    // 각 면체 위치 이동 및 90도 꺾기
    skillFront.style.bottom = -200 + (value - 10500) / 5 + "px"; // 200
    skillFront.style.transform = "translate(0%, " + (value - 10500) / 10 + "%) rotateX(" + ((value - 10500) * 9) / 100 + "deg)";
    skillBack.style.bottom = -416 + ((value - 10500) * 52) / 125 + "px"; // 416
    skillBack.style.transform = "translate(0%, " + -(value - 10500) / 10 + "%) rotateX(" + (-(value - 10500) * 9) / 100 + "deg)";
    skillLeft.style.bottom = -654 + ((value - 10500) * 327) / 500 + "px"; // 654
    skillLeft.style.transform = "translate(" + -(value - 10500) / 10 + "%, 0%) rotateY(" + ((value - 10500) * 9) / 100 + "deg)";
    skillRight.style.bottom = -864 + ((value - 10500) * 108) / 125 + "px"; // 864
    skillRight.style.transform = "translate(" + (value - 10500) / 10 + "%, 0%) rotateY(" + (-(value - 10500) * 9) / 100 + "deg)";
    skillRight.style.transformStyle = "preserve-3d";
    skillTop.style.top = 232 - ((value - 10500) * 29) / 125 + "px"; // 232
    skillTop.style.transform = "translate(" + (value - 10500) / 10 + "%, 0%) rotateY(" + (-(value - 10500) * 9) / 100 + "deg)";
  }
  if (value >= 11500) {
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
  if (value >= 11500 && value < 11800) {
    skillWrap.style.transform = "rotate(0deg) translate(0%, " + -(value - 11500) / 30 + "%)";
  }
  if (value >= 11800) {
    skillWrap.style.transform = "rotate(0deg) translate(0%, -10%)";
    for (let i = 0; i < workListEls.length; i++) {
      skillIconEls[i].setAttribute("src", `./images/cube-thumb${i}.png`);
    }
    // skillIconEls[0].src = "./images/thumb-medi.jpg";
    // skillIconEls[1].src = "./images/thumb-rocky.jpg";
    // skillIconEls[2].src = "./images/thumb-nemo.jpg";
    // skillIconEls[3].src = "./images/thumb-vivid.jpg";
    // skillIconEls[4].src = "./images/thumb-over.jpg";
    // skillIconEls[5].src = "./images/thumb-photo.jpg";
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
  if (value >= 11800 && value < 12800) {
    skillLastCube.style.transform = "scale(3)" + "translate(-20%, -50%)" + "rotateX(" + (55 + ((value - 11800) * 9) / 50) + "deg) rotateY(" + 180 + "deg) rotateZ(" + (45 + ((value - 11800) * 9) / 50) + "deg)";
    skillWrap.style.transform = "rotate(0deg) translate(0%, " + (-10 + (value - 11800) / 100) + "%)";

    // 각 면체 위치 이동 및 90도 꺾기
    skillFront.style.transform = "translate(0%, 100%) rotateX(" + (90 - ((value - 11800) * 9) / 50) + "deg)";
    skillBack.style.transform = "translate(0%, -100%) rotateX(" + (-90 + ((value - 11800) * 9) / 50) + "deg)";
    skillLeft.style.transform = "translate(-100%, 0%) rotateY(" + (90 - ((value - 11800) * 9) / 50) + "deg)";
    skillRight.style.transform = "translate(100%, 0%) rotateY(" + (-90 + ((value - 11800) * 9) / 50) + "deg)";
    skillRight.style.transformStyle = "preserve-3d";
    skillTop.style.transform = "translate(100%, 0%) rotateY(" + (-90 + ((value - 11800) * 9) / 50) + "deg)";

    // 각 면체 높이 넓이 조정
    skillLastCube.style.width = 50 + (value - 11800) / 10 + "px";
    skillLastCube.style.height = 50 + (value - 11800) / 10 + "px";
    for (let i = 0; i < skillRecEls.length; i++) {
      skillRecEls[i].style.width = 50 + (value - 11800) / 10 + "px";
      skillRecEls[i].style.height = 50 + (value - 11800) / 10 + "px";
    }
  }

  if (value >= 12800) {
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
  if (value >= 12800 && value < 13300) {
    skillLastCube.style.top = 50 - (value - 12800) / 50 + "%";
    skillLastCube.style.transform = "scale(3) translate(" + (-20 - ((value - 12800) * 60) / 500) + "%, " + -50 + "%) rotateX(" + (235 + ((value - 12800) * 35) / 500) + "deg) rotateY(180deg) rotateZ(" + (225 + ((value - 12800) * 40) / 500) + "deg)";
  }
  if (value >= 13300) {
    skillLastCube.style.top = 40 + "%";
    skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(265deg)";
    skillWrap.style.transform = "rotate(0deg) translate(0%, 0%)";
    workList.classList.add("visible");
    worksSection.style.pointerEvents = "auto";
  } else {
    workList.classList.remove("visible");
    skillWrap.style.backgroundImage = "none";
    worksSection.style.pointerEvents = "none";
  }
  // work-list 등장

  if (value >= 13300 && value < 14000) {
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

    popUp.style.display = "flex";

    for (let i = 0; i < workListEls.length; i++) {
      workListEls[i].style.pointerEvents = "auto";
      workListEls[i].style.transition = "0.3s ease-in";

      // 워크리스트에 마우스를 올리고 내렸을 때
      workListEls[i].addEventListener("mouseenter", (e) => {
        bottomBarCheck = false;
        bottomBar.classList.remove("active");
        target = e.currentTarget;
        workListid = i;

        for (let j = 0; j < workListEls.length; j++) {
          workListEls[j].classList.remove("active");
        }
        workListEls[i].classList.add("active");

        target === workListEls[0] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(265deg)");
        target === workListEls[1] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(175deg)");
        target === workListEls[2] && (skillLastCube.style.transform = "scale(3.24) translate(-74.5%, 0.5%) rotateX(180deg) rotateY(175deg) rotateZ(270deg)");
        target === workListEls[3] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(85deg)");
        target === workListEls[4] && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(355deg)");
        target === workListEls[5] && (skillLastCube.style.transform = "scale(2.74) translate(-86.5%, 0%) rotateX(360deg) rotateY(185deg) rotateZ(270deg)");
        target === workListEls[i] && (skillWrap.style.backgroundImage = `url("./images/back/background${i + 1}.png")`);
      });
      workListEls[i].addEventListener("mouseleave", () => {
        bottomBarCheck = true;
        bottomBar.classList.add("active");
      });
      // 팝업 창
      workListEls[i].addEventListener("click", () => {
        bottomBarCheck = false;
        bottomBar.classList.remove("active");

        popUp.style.opacity = 1;
        popUp.style.pointerEvents = "auto";
        popUpWin[i].style.display = "flex";
        setTimeout(function () {
          popUpWin[i].style.transform = "scale(1)";
          popUpWin[i].style.opacity = 1;
        }, 50);
        body.classList.add("scroll");
      });
      popClose[i].addEventListener("click", () => {
        bottomBarCheck = true;
        bottomBar.classList.add("active");

        popUp.style.opacity = 0;
        popUp.style.pointerEvents = "none";
        popUpWin[i].style.transform = "scale(0)";
        popUpWin[i].style.opacity = 0;
        setTimeout(function () {
          popUpWin[i].style.display = "none";
        }, 200);
        body.classList.remove("scroll");
      });
      popUp.addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.target !== e.currentTarget) return;
        bottomBarCheck = true;
        bottomBar.classList.add("active");

        popUp.style.opacity = 0;
        popUp.style.pointerEvents = "none";
        popUpWin[i].style.transform = "scale(0)";
        popUpWin[i].style.opacity = 0;
        setTimeout(function () {
          popUpWin[i].style.display = "none";
        }, 300);
        body.classList.remove("scroll");
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
  if (value < 14000) {
    contactSection.style.display = "none";
    contactSection.style.width = 0 + "vw";
  }

  if (value >= 14000 && value < 15300) {
    contactSection.style.display = "block";
    contactSection.style.width = (value - 14000) / 13 + "vw";
  }

  if (value >= 15300) {
    contactSection.style.display = "block";
    contactSection.style.width = 100 + "vw";
  }
  if (value > 14200) {
    // cubeLogoCube.classList.remove("logoRotate");
    // cubeLogoCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(0deg)";
    for (let i = 0; i < loadingCubeRec.length; i++) {
      loadingCubeRec[i].style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      loadingCubeRec[i].style.border = "1px solid rgb(70, 70, 70, 0.3)";
      loadingCubeRec[i].style.opacity = 0.5;
    }
  } else {
    // cubeLogoCube.classList.add("logoRotate");
    // cubeLogo.style.top = "3%";
    // for (let i = 0; i < cubeLogoCubeDiv.length; i++) {
    //   cubeLogoCubeDiv[i].style.border = "2px solid rgb(0, 0, 0)";
    // }
    for (let i = 0; i < loadingCubeRec.length; i++) {
      loadingCubeRec[i].style.backgroundColor = "rgba(18, 18, 18, 0.85)";
      loadingCubeRec[i].style.border = "1px solid rgb(60, 60, 60)";
      loadingCubeRec[i].style.opacity = 1;
    }
  }

  if (value > 14200 && value < 15200) {
    // cubeLogo.style.transform = " scale(" + (0.65 + ((value - 14700) * 7) / 500) + ")";
    // cubeLogoCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(" + ((value - 14700) * 135) / 500 + "deg)";
    // cubeLogo.style.top = 3 + ((value - 14700) * 47) / 500 + "%";
    // for (let i = 0; i < cubeLogoCubeDiv.length; i++) {
    //   cubeLogoCubeDiv[i].style.border = 2 - (value - 14700) / 500 + "px solid rgb(0, 0, 0)";
    // }
    loadingCube.style.opacity = 0 + (value - 14200) / 5 + "%";
    loadingCube.style.transform = "scale(" + (0 + (value - 14200) / 1000) + ")";
    loadingCubeCube.style.transform = "rotateX(" + (0 + ((value - 14200) * 61) / 1000) + "deg) rotateY(" + (0 + ((value - 14200) * 153) / 1000) + "deg) rotateZ(" + (0 + ((value - 14200) * 53) / 1000) + "deg) scale3d(5, 5, 5)";
    // loadingCube.style.opacity = 0;
  }

  if (value >= 15200) {
    // cubeLogo.style.transform = "scale(7.65)";
    // cubeLogoCube.style.transform = "rotateX(55deg) rotateY(180deg) rotateZ(135deg)";
    // cubeLogo.style.top = "50%";
    // for (let i = 0; i < cubeLogoCubeDiv.length; i++) {
    //   cubeLogoCubeDiv[i].style.border = "1px solid rgb(0, 0, 0)";
    // }
    loadingCube.style.opacity = 1;
    loadingCubeCube.style.transform = "rotateX(61deg) rotateY(153deg) rotateZ(53deg) scale3d(5, 5, 5)";
    loadingCube.style.transform = "scale(1)";
  } else {
  }
  if (value >= 400 && value < 14200) {
    loadingCube.style.opacity = 0;
  }
  // 13900보다 커질시에 글자색 변경
  if (value >= 15200) {
    header.style.color = "#000";
    toTop.style.color = "#000";
    mailColor.style.color = "#000";
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
