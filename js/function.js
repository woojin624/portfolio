// 큐브가 회전하는 타이머
function DisplayWork() {
  if (timeId == null) {
    turnId = 0;
    timeId = turnId;
  }
  console.log(turnId);

  turnId === 0 && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(265deg)");
  turnId === 1 && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(175deg)");
  turnId === 2 && (skillLastCube.style.transform = "scale(3.24) translate(-74.5%, 0.5%) rotateX(180deg) rotateY(175deg) rotateZ(270deg)");
  turnId === 3 && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(85deg)");
  turnId === 4 && (skillLastCube.style.transform = "scale(3) translate(-80%, -50%) rotateX(270deg) rotateY(180deg) rotateZ(355deg)");
  turnId === 5 && (skillLastCube.style.transform = "scale(2.74) translate(-86.5%, 0%) rotateX(360deg) rotateY(185deg) rotateZ(270deg)");
  skillWrap.style.backgroundImage = `url("./images/back/background${turnId + 1}.png")`;

  for (let j = 0; j < workListEls.length; j++) {
    workListEls[j].classList.remove("active");
  }
  workListEls[turnId].classList.add("active");

  turnId++;
  if (turnId == 6) {
    turnId = 0;
  }
}

// // 큐브가 회전하는 타이머를 작동하는 함수
function StartTime() {
  if (cubeFunction == true) {
    DisplayWork();
    timeId = setInterval(DisplayWork, cubeInterval);
    cubeFunction = false;
  }
  console.log("실행", cubeFunction);
}

// // 큐브가 회전하는 타이머를 멈추는 함수
function StopTime() {
  if (timeId != null) {
    clearInterval(timeId);
  }
  console.log("정지", cubeFunction);
}
