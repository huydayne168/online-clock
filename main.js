// chuyển màu trang web:

const body = document.querySelector("body");
const timer = document.querySelector(".timer");
const timeH = document.querySelector(".timer .time:nth-child(1)");
const timeM = document.querySelector(".timer .time:nth-child(2)");
const timeS = document.querySelector(".timer .time:nth-child(3)");
const showBtn = document.querySelector(".show-btn");

const changColorWrapper = document.querySelector(".change-color--wrapper");
const colorBtn = document.querySelectorAll(".color-btn");

const darkBtn = document.querySelector(".color-btn:nth-child(1)");
const whiteBtn = document.querySelector(".color-btn:nth-child(2)");
const springBtn = document.querySelector(".color-btn:nth-child(3)");
const summerBtn = document.querySelector(".color-btn:nth-child(4)");
const fallBtn = document.querySelector(".color-btn:nth-child(5)");
const winterBtn = document.querySelector(".color-btn:nth-child(6)");

darkBtn.addEventListener("click", function () {
    body.style = "background-color: var(--dark-body-color)";
    timeH.style = "background-color: var(--dark-time-color)";
    timeM.style = "background-color: var(--dark-time-color)";
    timeS.style = "background-color: var(--dark-time-color)";
    changColorWrapper.style = "background-color: var(--dark-time-color)";
    showBtn.style = "background-color: var(--dark-time-color)";
    timer.style = "color: #fff";
});

whiteBtn.addEventListener("click", function () {
    body.style = "background-color: var(--white-body-color)";
    timeH.style = "background-color: var(--white-time-color)";
    timeM.style = "background-color: var(--white-time-color)";
    timeS.style = "background-color: var(--white-time-color)";
    changColorWrapper.style = "background-color: var(--white-time-color)";
    showBtn.style = "background-color: var(--white-time-color)";
    timer.style = "color: #fff";
});
springBtn.addEventListener("click", function () {
    body.style = "background-color: var(--spring-body-color)";
    timeH.style = "background-color: var(--spring-time-color)";
    timeM.style = "background-color: var(--spring-time-color)";
    timeS.style = "background-color: var(--spring-time-color)";
    changColorWrapper.style = "background-color: var(--spring-time-color)";
    showBtn.style = "background-color: var(--spring-time-color)";
    timer.style = "color: #AACB73";
});
summerBtn.addEventListener("click", function () {
    body.style = "background-color: var(--summer-body-color)";
    timeH.style = "background-color: var(--summer-time-color)";
    timeM.style = "background-color: var(--summer-time-color)";
    timeS.style = "background-color: var(--summer-time-color)";
    changColorWrapper.style = "background-color: var(--summer-time-color)";
    showBtn.style = "background-color: var(--summer-time-color)";
    timer.style = "color: #fff";
});
fallBtn.addEventListener("click", function () {
    body.style = "background-color: var(--fall-body-color)";
    timeH.style = "background-color: var(--fall-time-color)";
    timeM.style = "background-color: var(--fall-time-color)";
    timeS.style = "background-color: var(--fall-time-color)";
    changColorWrapper.style = "background-color: var(--fall-time-color)";
    showBtn.style = "background-color: var(--fall-time-color)";
    timer.style = "color: #fff";
});
winterBtn.addEventListener("click", function () {
    body.style = "background-color: var(--winter-body-color)";
    timeH.style = "background-color: var(--winter-time-color)";
    timeM.style = "background-color: var(--winter-time-color)";
    timeS.style = "background-color: var(--winter-time-color)";
    changColorWrapper.style = "background-color: var(--winter-time-color)";
    showBtn.style = "background-color: var(--winter-time-color)";
    timer.style = "color: #fff";
});

console.log(timeH);
