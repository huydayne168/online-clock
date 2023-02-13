// khai báo biến:

const body = document.querySelector("body");
const timer = document.querySelector(".timer");
const timeH = document.querySelector(".timer .time:nth-child(1)");
const timeM = document.querySelector(".timer .time:nth-child(2)");
const timeS = document.querySelector(".timer .time:nth-child(3)");
const arrowBtn = document.querySelector(".arrow-btn");
const arrowBtnImg = document.querySelector(".arrow-btn img");

const changeColor = document.querySelector(".change-color");
const changeColorWrapper = document.querySelector(".change-color--wrapper");
const colorBtn = document.querySelectorAll(".color-btn");

const darkBtn = document.querySelector(".color-btn:nth-child(1)");
const whiteBtn = document.querySelector(".color-btn:nth-child(2)");
const springBtn = document.querySelector(".color-btn:nth-child(3)");
const summerBtn = document.querySelector(".color-btn:nth-child(4)");
const fallBtn = document.querySelector(".color-btn:nth-child(5)");
const winterBtn = document.querySelector(".color-btn:nth-child(6)");

let changeColorWidth = changeColorWrapper.offsetWidth;

var status = -1;
arrowBtn.addEventListener("click", function () {
    if (status == -1) {
        changeColorWrapper.classList.add("trans");
        arrowBtn.classList.add("trans");
        arrowBtnImg.classList.add("hide-btn");

        // changeColor.style = "overflow: visible";
        status = 1;
    } else if (status == 1) {
        changeColorWrapper.classList.remove("trans");
        arrowBtn.classList.remove("trans");
        arrowBtnImg.classList.remove("hide-btn");
        status = -1;
    }
    console.log(status);
});

// ==========chuyển màu trang web:
darkBtn.addEventListener("click", function () {
    body.style = "background-color: var(--dark-body-color)";
    timeH.style = "background-color: var(--dark-time-color)";
    timeM.style = "background-color: var(--dark-time-color)";
    timeS.style = "background-color: var(--dark-time-color)";
    changeColorWrapper.style = "background-color: var(--dark-time-color)";
    arrowBtn.style = "background-color: var(--dark-time-color)";
    timer.style = "color: #fff";
});

whiteBtn.addEventListener("click", function () {
    body.style = "background-color: var(--white-body-color)";
    timeH.style = "background-color: var(--white-time-color)";
    timeM.style = "background-color: var(--white-time-color)";
    timeS.style = "background-color: var(--white-time-color)";
    changeColorWrapper.style = "background-color: var(--white-time-color)";
    arrowBtn.style = "background-color: var(--white-time-color)";
    timer.style = "color: #fff";
});
springBtn.addEventListener("click", function () {
    body.style = "background-color: var(--spring-body-color)";
    timeH.style = "background-color: var(--spring-time-color)";
    timeM.style = "background-color: var(--spring-time-color)";
    timeS.style = "background-color: var(--spring-time-color)";
    changeColorWrapper.style = "background-color: var(--spring-time-color)";
    arrowBtn.style = "background-color: var(--spring-time-color)";
    timer.style = "color: #AACB73";
});
summerBtn.addEventListener("click", function () {
    body.style = "background-color: var(--summer-body-color)";
    timeH.style = "background-color: var(--summer-time-color)";
    timeM.style = "background-color: var(--summer-time-color)";
    timeS.style = "background-color: var(--summer-time-color)";
    changeColorWrapper.style = "background-color: var(--summer-time-color)";
    arrowBtn.style = "background-color: var(--summer-time-color)";
    timer.style = "color: #fff";
});
fallBtn.addEventListener("click", function () {
    body.style = "background-color: var(--fall-body-color)";
    timeH.style = "background-color: var(--fall-time-color)";
    timeM.style = "background-color: var(--fall-time-color)";
    timeS.style = "background-color: var(--fall-time-color)";
    changeColorWrapper.style = "background-color: var(--fall-time-color)";
    arrowBtn.style = "background-color: var(--fall-time-color)";
    timer.style = "color: #fff";
});
winterBtn.addEventListener("click", function () {
    body.style = "background-color: var(--winter-body-color)";
    timeH.style = "background-color: var(--winter-time-color)";
    timeM.style = "background-color: var(--winter-time-color)";
    timeS.style = "background-color: var(--winter-time-color)";
    changeColorWrapper.style = "background-color: var(--winter-time-color)";
    arrowBtn.style = "background-color: var(--winter-time-color)";
    timer.style = "color: #fff";
});
// ===============xong phần chuyển màu trang web

// ===============ẩn hiện bảng chọn màu
