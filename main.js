// khai báo biến:

const body = document.querySelector("body");
const timer = document.querySelector(".timer");
const timeH = document.querySelector(".timer .time:nth-child(1)");
const timeM = document.querySelector(".timer .time:nth-child(2)");
const timeS = document.querySelector(".timer .time:nth-child(3)");
const arrowBtn = document.querySelector(".arrow-btn");
const arrowBtnImg = document.querySelector(".arrow-btn img");

// biến chuyển màu
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

// ẩn hiện thanh chọn màu
var status = -1;
arrowBtn.addEventListener("click", function () {
    if (status == -1) {
        changeColorWrapper.classList.add("trans");
        arrowBtn.classList.add("trans");
        arrowBtnImg.classList.add("hide-btn");

        status = 1;
    } else if (status == 1) {
        changeColorWrapper.classList.remove("trans");
        arrowBtn.classList.remove("trans");
        arrowBtnImg.classList.remove("hide-btn");
        status = -1;
    }
    // console.log(status);
});

// ====================phần nghe nhạc==================
const musicWrapper = document.querySelector(".music-wrapper");
const musicBodyWrapper = document.querySelector(".body-wrapper ");
const musicBody = document.querySelector(".music-wrapper .body");
const musicDesc = document.querySelector(".music-wrapper .desc");
const musicThumb = document.querySelector(".music-thumb");
const musicThumbImg = document.querySelector(".music-thumb img");
const listBtn = document.querySelector(".list-btn");
const listSong = document.querySelector(".list-songs");
const listSongWrapper = document.querySelector(".list-songs--wrapper");
const musicBodyName = document.querySelector(".music-wrapper .desc .name");
const musicBodyArtist = document.querySelector(".music-wrapper .desc .artist");

// ẩn hiện thanh nghe nhạc:
var checkMusicBar = -1;
musicThumb.addEventListener("click", function () {
    if (checkMusicBar == -1) {
        musicBodyWrapper.classList.remove("opacity-0");
        musicBody.style = "display: block";
        musicBodyWrapper.classList.add("opacity-1");
        musicThumb.classList.add("music-thumb--trans");
        // musicBody.classList.add("show");
        checkMusicBar = 1;
    } else if (checkMusicBar == 1) {
        musicBodyWrapper.classList.remove("opacity-1");
        musicBody.style = "display: none";
        musicBody.classList.add("dis-none");
        musicBodyWrapper.classList.add("opacity-0");
        musicThumb.classList.remove("music-thumb--trans");
        if (checkListSong == 1) {
            listSongWrapper.classList.remove("list-songs--trans");
            checkListSong = -1;
        }
        // musicBody.classList.remove("show");
        checkMusicBar = -1;
    }
});

// ẩn hiện playlist:

var checkListSong = -1;
listBtn.addEventListener("click", function () {
    if (checkListSong == -1) {
        listSongWrapper.classList.add("list-songs--trans");
        checkListSong = 1;
    } else if (checkListSong == 1) {
        listSongWrapper.classList.remove("list-songs--trans");
        checkListSong = -1;
    }
});

// ==========chuyển màu trang web:
darkBtn.addEventListener("click", function () {
    body.style = "background-color: var(--dark-body-color)";
    timeH.style = "background-color: var(--dark-time-color)";
    timeM.style = "background-color: var(--dark-time-color)";
    timeS.style = "background-color: var(--dark-time-color)";
    changeColorWrapper.style = "background-color: var(--dark-time-color)";
    arrowBtn.style = "background-color: var(--dark-time-color)";
    musicBodyWrapper.style = "background-color: var(--dark-time-color)";
    musicThumb.style = "background-color: var(--dark-time-color)";
    timer.style = "color: #fff";
    musicDesc.style = "color: #fff";
});

whiteBtn.addEventListener("click", function () {
    body.style = "background-color: var(--white-body-color)";
    timeH.style = "background-color: var(--white-time-color)";
    timeM.style = "background-color: var(--white-time-color)";
    timeS.style = "background-color: var(--white-time-color)";
    changeColorWrapper.style = "background-color: var(--white-time-color)";
    arrowBtn.style = "background-color: var(--white-time-color)";
    musicBodyWrapper.style = "background-color: var(--white-time-color)";
    musicThumb.style = "background-color: var(--white-time-color)";
    timer.style = "color: #fff";
    musicDesc.style = "color: #fff";
});
springBtn.addEventListener("click", function () {
    body.style = "background-color: var(--spring-body-color)";
    timeH.style = "background-color: var(--spring-time-color)";
    timeM.style = "background-color: var(--spring-time-color)";
    timeS.style = "background-color: var(--spring-time-color)";
    changeColorWrapper.style = "background-color: var(--spring-time-color)";
    arrowBtn.style = "background-color: var(--spring-time-color)";
    musicBodyWrapper.style = "background-color: var(--spring-time-color)";
    musicThumb.style = "background-color: var(--spring-time-color)";
    timer.style = "color: #AACB73";
    musicDesc.style = "color: #AACB73";
});
summerBtn.addEventListener("click", function () {
    body.style = "background-color: var(--summer-body-color)";
    timeH.style = "background-color: var(--summer-time-color)";
    timeM.style = "background-color: var(--summer-time-color)";
    timeS.style = "background-color: var(--summer-time-color)";
    changeColorWrapper.style = "background-color: var(--summer-time-color)";
    arrowBtn.style = "background-color: var(--summer-time-color)";
    musicBodyWrapper.style = "background-color: var(--summer-time-color)";
    musicThumb.style = "background-color: var(--summer-time-color)";
    timer.style = "color: #fff";
    musicDesc.style = "color: #fff";
});
fallBtn.addEventListener("click", function () {
    body.style = "background-color: var(--fall-body-color)";
    timeH.style = "background-color: var(--fall-time-color)";
    timeM.style = "background-color: var(--fall-time-color)";
    timeS.style = "background-color: var(--fall-time-color)";
    changeColorWrapper.style = "background-color: var(--fall-time-color)";
    arrowBtn.style = "background-color: var(--fall-time-color)";
    musicBodyWrapper.style = "background-color: var(--fall-time-color)";
    musicThumb.style = "background-color: var(--fall-time-color)";
    timer.style = "color: #fff";
    musicDesc.style = "color: #fff";
});
winterBtn.addEventListener("click", function () {
    body.style = "background-color: var(--winter-body-color)";
    timeH.style = "background-color: var(--winter-time-color)";
    timeM.style = "background-color: var(--winter-time-color)";
    timeS.style = "background-color: var(--winter-time-color)";
    changeColorWrapper.style = "background-color: var(--winter-time-color)";
    arrowBtn.style = "background-color: var(--winter-time-color)";
    musicBodyWrapper.style = "background-color: var(--winter-time-color)";
    musicThumb.style = "background-color: var(--winter-time-color)";
    timer.style = "color: #fff";
    musicDesc.style = "color: #fff";
});
// ===============xong phần chuyển màu trang web

//============================================== phần phát nhạc và các thứ liên quan:
const audio = document.querySelector("#audio");
const playBtn = document.querySelector(".music-wrapper .buttons .play-btn");
const progress = document.querySelector("#progress");

const app = {
    currentIndex: 2,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    // danh sách các bài nhạc hiện có
    songs: [
        {
            name: "Rồi ta sẽ ngắm pháo hoa cùng nhau",
            singer: "O.Lew",
            path: "./music/roitasengamphaohoacungnhau.mp3",
            thumb: "./img/song-thumb/roitasengamphaohoacungnhau.jpg",
        },
        {
            name: "Luôn Yêu Đời",
            singer: "Đen ft Chen",
            path: "./music/LuonYeuDoi.mp3",
            thumb: "./img/song-thumb/luonyeudoi.jpg",
        },
        {
            name: "Đứa nào làm em buồn?",
            singer: "Phúc Du ft Hoàng Dũng",
            path: "./music/DuaNaoLamEmBuon.mp3",
            thumb: "./img/song-thumb/duanaolamembuonthe.jpg",
        },
        {
            name: "Nơi này có anh",
            singer: "Sơn Tùng-MTP",
            path: "./music/noinaycoanh.mp3",
            thumb: "./img/song-thumb/noinaycoanh.jpg",
        },
        {
            name: "Để tôi ôm em bằng giai điệu này",
            singer: "Kai Đinh ft Min, Grey D",
            path: "./music/DeToiOmEmBangGiaiDieuNay.mp3",
            thumb: "./img/song-thumb/detoiomembanggiaidieunay.jpg",
        },
    ],

    // render bài nhạc vào playlist:
    render: function () {
        const htmls = this.songs.map((song) => {
            return `<div class="song">
                <div
                class="thumb"
                style="
                    background-image: url('${song.thumb}');
                "
            ></div>
            <div class="song-body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`;
        });
        listSongWrapper.innerHTML = htmls.join("");
    },

    // xử lí các sự kiện:
    handleEvents: function () {
        const _this = this;
        // bam phat/stop nhac:
        playBtn.addEventListener("click", function () {
            if (_this.isPlaying) {
                audio.pause();
                musicBodyWrapper.classList.remove("playing");
                _this.isPlaying = false;
                console.log(this);
            } else {
                audio.play();
                musicBodyWrapper.classList.add("playing");
                _this.isPlaying = true;
            }
        });

        // cho phần progress chạy theo nhạc:
        progress.addEventListener("change", function (e) {
            audio.currentTime = (Number(e.target.value) * audio.duration) / 100;
        });
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };

        // tua nhạc phần progress:
    },

    // định nghĩa phương thức:
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },

    // tải ra bài nhạc đang nghe:
    loadCurrentSong: function () {
        musicBodyName.textContent = this.currentSong.name;
        musicBodyArtist.textContent = this.currentSong.singer;
        musicThumbImg.src = this.currentSong.thumb;
        audio.src = this.currentSong.path;
    },

    start: function () {
        this.defineProperties();
        this.render();
        this.handleEvents();
        this.loadCurrentSong();
    },
};

app.start();
