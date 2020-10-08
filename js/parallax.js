'use strict';

const body = document.querySelector('body');
const circle = document.querySelector('.circle');
const section = document.querySelector('.main');
const mail = document.querySelector('.mail');
const navList = document.querySelectorAll('.nav-list');
const toTop = document.querySelector('.to-top');
const hello = document.querySelector('.hello');
const cubeLogo = document.querySelector('header > div.cube-logo');
const cubeLogoCube = document.querySelector('header > div.cube-logo > div.cube');
const aboutSpace = document.querySelector('.about-space');
const scrollDown = document.querySelector('.scroll-down');
const loadingCube = document.querySelector('.loading-cube');
const loadingCubeCube = document.querySelector('section.loading-cube > div.cube');
const lineMentLeft = document.querySelector('div.line-ment > .left > p ');
const lineMentRight = document.querySelector('div.line-ment > .right > p ');
const lineMentBox = document.querySelector('.line-ment');
const profileImage = document.querySelector('div.circle > img.profile-image');
const mentBoxWrap = document.querySelector('.box-ment');
const mentBox = document.querySelector('.box-ment > .box');
const mentInBox = document.querySelector('.box-ment > p');
const skillIntro = document.querySelector('div.skill-intro');
const skillIntroP = document.querySelector('div.skill-intro > p ');
const skillWrap = document.querySelector('div.skill-wrap');
const skillBottom = document.querySelector('div.skill-wrap > div.bottom');
const skillFront = document.querySelector('div.skill-wrap > div.bottom > div.front');
const skillBack = document.querySelector('div.skill-wrap > div.bottom > div.back');
const skillLeft = document.querySelector('div.skill-wrap > div.bottom > div.left');
const skillRight = document.querySelector('div.skill-wrap > div.bottom > div.right');
const skillTop = document.querySelector('div.skill-wrap > div.bottom > div.right > div.top');
let value;

// 페이지 로딩되기 직전 스크롤 맨위로
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
// 페이지가 로당되었을 때 스크롤 막기, 3초후 풀기
window.onload = function () {
    body.classList.add('scroll');
    // loadingCubeCube.classList.add('cube3d');
    setTimeout(function () {
        body.classList.remove('scroll');
        loadingCubeCube.style.transform = 'rotateX(55deg) rotateY(180deg) rotateZ(45deg)';
        loadingCubeCube.classList.remove('cube3d');
    }, 3000);
};

// 우측 내비게이션 클릭 시 해당 value값 위치로 이동
navList[0].addEventListener('click', function () {
    value = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
navList[1].addEventListener('click', function () {
    value = 1100;
    window.scrollTo({ top: value, behavior: 'smooth' });
});
navList[2].addEventListener('click', function () {
    value = 2300;
    window.scrollTo({ top: value, behavior: 'smooth' });
});
toTop.addEventListener('click', function () {
    value = 0;
    window.scrollTo({ top: value, behavior: 'smooth' });
});

// $(document).ready(function () {});

// 스크롤 이벤트
window.addEventListener('scroll', function () {
    value = window.scrollY;
    console.log(value);

    // 로딩화면 요소 처리
    if (value == 0) {
        loadingCubeCube.style.transform = 'rotateX(55deg) rotateY(180deg) rotateZ(45deg)';
    }
    if (value < 400) {
        hello.style.opacity = 100 - value / 4 + '%';
        hello.style.display = 'block';
        aboutSpace.style.opacity = 100 - value / 4 + '%';
        aboutSpace.style.display = 'block';
        scrollDown.style.opacity = 100 - value / 4 + '%';
        scrollDown.style.display = 'block';
        loadingCube.style.opacity = 100 - value / 4 + '%';
        loadingCube.style.transform = 'scale(' + (1 - value / 600) + ')';
        loadingCubeCube.style.transform = 'rotateX(' + (55 - (value * 55) / 400) + 'deg) rotateY(' + (180 - (value * 180) / 400) + 'deg) rotateZ(' + (45 - (value * 45) / 400) + 'deg)';

        // 메일, 탑버튼 요소
        mail.style.top = 30 + value / 8 + 'px';
        mail.style.right = 40 - value / 8 + 'px';
        mail.style.transform = 'rotate(' + (value * 90) / 400 + 'deg)'; // rotate(90deg)
        toTop.style.opacity = value / 4 + '%';

        // 써클 초기화
        circle.style.width = 0 + 'px'; //
        circle.style.height = 0 + 'px';
        circle.style.borderRadius = 5 + 'px';
        circle.style.border = '0';
    } else {
        // 로딩화면 요소 처리
        hello.style.opacity = 0;
        hello.style.display = 'none';
        aboutSpace.style.opacity = 0;
        aboutSpace.style.display = 'none';
        scrollDown.style.opacity = 0;
        scrollDown.style.display = 'none';
        loadingCube.style.opacity = 0;
        // loadingCubeCube.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

        // 메일, 탑버튼 요소
        mail.style.top = 80 + 'px';
        mail.style.right = -10 + 'px';
        mail.style.transform = 'rotate(90deg)';
        toTop.style.opacity = 100 + '%';
    }

    // 큐브 로고

    if (value >= 400 && value < 700) {
        cubeLogo.style.opacity = (value - 400) / 3 + '%';
        cubeLogo.style.transform = 'scale(' + (0.35 + (value - 400) / 1000) + ')';
        cubeLogoCube.style.transform = 'rotateX(' + ((value - 400) * 55) / 300 + 'deg) rotateY(' + ((value - 400) * 180) / 300 + 'deg) rotateZ(' + ((value - 400) * 45) / 300 + 'deg)';
    }
    if (value < 400) {
        cubeLogo.style.opacity = 0 + '%';
        cubeLogo.style.transform = 'scale(0.35)';
        cubeLogoCube.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    }
    if (value >= 700) {
        cubeLogo.style.opacity = 100 + '%';
        cubeLogo.style.transform = 'scale(0.65)';
        cubeLogoCube.style.transform = 'rotateX(55deg) rotateY(180deg) rotateZ(45deg)';
    }

    //여기부터 오브젝트 놀이 시작

    if (value >= 400 && value < 500) {
        circle.style.width = (value - 400) / 10 + 'px'; // width = 10px
        circle.style.height = (value - 400) / 10 + 'px'; // height = 20px
        circle.style.backgroundColor = '#000'; // back = black
        circle.style.border = '5px solid black';
        circle.style.borderRadius = 5 + 'px';
        circle.style.transition = '0.1s';
        circle.style.transform = 'translate(-50%, -50%)';
    }

    if (value >= 500) {
        circle.style.width = 10 + 'px'; // width = 20px
        circle.style.height = 10 + 'px'; // height = 20px
    }
    if (value >= 500 && 1250 > value) {
        circle.style.border = '5px solid black';
        circle.style.transform = 'translate(-50%, -50%)';
        circle.style.transition = '0.1s';
    }
    if (value >= 500 && value < 1500) {
        circle.style.width = 10 + (value - 500) * 3 + 'px';
    }
    if (value > 1500) {
        circle.style.width = 3020 + 'px';
        circle.style.borderRadius = 0;
    }

    // 라인 멘트 요소
    if (value >= 1250 && value <= 1650) {
        lineMentLeft.style.top = (-(value - 1250) * 125) / 400 + 'px';
        lineMentRight.style.bottom = (-(value - 1250) * 125) / 400 + 'px';
    } else if (value < 1250 || value > 2300) {
        lineMentLeft.style.top = 0 + 'px';
        lineMentRight.style.bottom = 0 + 'px';
    } else if (value > 1650 && value <= 1900) {
        lineMentLeft.style.top = -125 + 'px';
        lineMentRight.style.bottom = -125 + 'px';
    } else if (value > 1900 && value <= 2300) {
        lineMentLeft.style.top = -125 + ((value - 1900) * 125) / 400 + 'px';
        lineMentRight.style.bottom = -125 + ((value - 1900) * 125) / 400 + 'px';
    }
    if (value > 2300) {
        lineMentBox.style.opacity = 0;
    } else {
        lineMentBox.style.opacity = 1;
    }
    if (value >= 1250 && 2300 > value) {
        // 사각형 크기 물밑작업
        circle.style.overflow = 'hidden';
        circle.style.transition = '0s';
        circle.style.backgroundColor = 'transparent';
        circle.style.borderRadius = 0;
        circle.style.width = 3020 + 'px';
        circle.style.height = 3020 + 'px';
        circle.style.border = '10px solid black';
        circle.style.transform = 'translate(-50%, -10px)';
    } else {
        circle.style.transition = '0.1s';
    }
    // 라인을 사각형으로 줄어들어 보이게 만드는 모션
    if (value >= 2300 && value <= 3300) {
        circle.style.transition = '0.1s';
        circle.style.width = 3020 - ((value - 2300) / 10) * 26 + 'px';
        circle.style.height = 3020 - ((value - 2300) / 10) * 26 + 'px';
        circle.style.backgroundColor = '#fff';
        circle.style.border = '10px solid black';
        circle.style.borderRadius = 0;
        circle.style.border = 10 - ((value - 2300) * 8) / 1000 + 'px solid black';
        circle.style.transform = 'translate(-50%,' + (0 - (value - 2300) / 20) + '%)';

        profileImage.style.opacity = -20 + (value - 2300) / 6 + '%';
    }
    if (value >= 2800 && value <= 3300) {
        circle.style.backgroundColor = '#000';
        profileImage.style.transform = 'translate(-50%, -50%) scale(' + (1 + (value - 2800) / 250) + ')';
    }
    if (value >= 2300 && value <= 5000) {
        // circle.innerHTML = "<p style='font-size: 40px;'>내 사진</p>";
    } else {
        profileImage.style.opacity = 0;
        profileImage.style.transform = 'translate(-50%, -50%) scale(1)';
        // circle.innerHTML = '';
    }
    if (value > 3300) {
        circle.style.width = 400 + 'px';
        circle.style.height = 400 + 'px';
        circle.style.border = 2 + 'px solid black';
        circle.style.transform = 'translate(-50%, -50%)';

        profileImage.style.opacity = 1;
        profileImage.style.transform = 'translate(-50%, -30%) scale(3)';
    }

    // 박스안에서 멘트가 나오는 모션
    if (value >= 3500 && value < 4000) {
        // mentBoxWrap.style.zIndex = 85;
        circle.style.transform = 'translate(' + (-50 - (value - 3500) / 10) + '%, ' + '-50%)';
        mentBox.style.transform = 'translate(' + (-60 - (value - 3500) / 10) + '%, ' + '-50%)';
        mentInBox.style.transform = 'translate(' + (-50 + (value - 3500) / 9) + '%, ' + '-50%)';
    }
    if (value >= 4000 && value < 4500) {
        circle.style.transform = 'translate(-100%, -50%)';
        mentBox.style.transform = 'translate(-110%, -50%)';
        mentInBox.style.transform = 'translate(5%, -50%)';
    }
    if (value < 3500) {
        mentBox.style.transform = 'translate(-60%, -50%)';
        mentInBox.style.transform = 'translate(-50%, -50%)';
    }
    if (value >= 4500 && value < 5000) {
        circle.style.transform = 'translate(' + (-100 + (value - 4500) / 10) + '%, ' + '-50%)';
        mentBox.style.transform = 'translate(' + (-110 + (value - 4500) / 10) + '%, ' + '-50%)';
        mentInBox.style.transform = 'translate(' + (5 - (value - 4500) / 9) + '%, ' + '-50%)';
    }
    if (value >= 5000) {
        circle.style.transform = 'translate(-50%, -50%)';
        circle.style.zIndex = 100;
        mentBox.style.transform = 'translate(-60%, -50%)';
        mentInBox.style.transform = 'translate(-50%, -50%)';
    }

    // 스킬 소개하기 위해서 커지는 단계
    if (value >= 5000 && value < 5500) {
        circle.style.width = 400 + (value - 5000) * 5 + 'px';
        circle.style.height = 400 + (value - 5000) * 5 + 'px';
        circle.style.backgroundColor = '#000';

        profileImage.style.transform = 'translate(-50%, -30%) scale(' + (3 + -(value - 5000) / 250) + ')';
    }
    if (value >= 5500) {
        body.style.background = '#000';
        circle.style.backgroundColor = '#000';
        circle.style.width = 2900 + 'px';
        circle.style.height = 2900 + 'px';
        profileImage.style.transform = 'translate(-50%, -20%) scale(1)';
    } else {
        body.style.background = '#fff';
    }
    if (value >= 5200 && value < 8200) {
        skillIntro.style.fontSize = (value - 5200) / 4 + 'px';
        skillIntroP.style.transform = 'scale(' + (1 + (value - 5200) / 1800) + ')';
        if (value >= 6800 && value < 8200) {
            skillIntroP.style.lineHeight = 1.2 + (value - 6800) / 800;
        } else {
            skillIntroP.style.lineHeight = 1.2;
        }

        profileImage.style.opacity = 100 - (value - 5200) / 10 + '%';
    }

    if (value < 5200) {
        skillIntro.style.fontSize = 0 + 'px';
    }

    // 여기부터 스킬 시작
    if (value >= 7000) {
        skillWrap.style.display = 'flex';
        circle.style.display = 'none';
    } else {
        skillWrap.style.display = 'none';
        skillBottom.style.opacity = 0;
        circle.style.display = 'flex';
    }
    if (value >= 7000 && value < 7300) {
        skillBottom.style.top = 500 - (value - 7000) / 2 + 'px';
        skillBottom.style.opacity = (value - 7000) / 2 + '%';
    }
    if (value >= 7300 && value < 7600) {
        skillBottom.style.top = 350 - (value - 7300) / 2 + 'px';
        skillFront.style.opacity = (value - 7300) / 2 + '%';
    }
    if (value >= 7600 && value < 7900) {
        skillBottom.style.top = 200 - (value - 7600) / 2 + 'px';
        skillBack.style.opacity = (value - 7600) / 2 + '%';
    }
    if (value >= 8200 && value < 8500) {
        skillBottom.style.top = 50 - (value - 8200) / 2 + 'px';
        skillLeft.style.opacity = (value - 8200) / 2 + '%';
    }
    if (value >= 8500 && value < 8800) {
        skillBottom.style.top = -100 - (value - 8500) / 2 + 'px';
        skillRight.style.opacity = (value - 8500) / 2 + '%';
    }
    if (value >= 8800 && value < 9100) {
        skillBottom.style.top = -250 - (value - 8800) / 2 + 'px';
        skillTop.style.opacity = (value - 8800) / 2 + '%';
    }
});
