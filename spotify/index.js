console.log("Spotify");

//variables
let songIndex = 0;
let audio = new Audio("songs/1.mp3");
let masterPlayer = document.getElementById("masterPlayer");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItem = [...document.getElementsByClassName("songItem")];
let songItemPlay = [...document.querySelectorAll(".songItemPlay")];
let songName = document.getElementById("songName");

//songs array of
let songs = [
  {
    songName: "2u",
    filePath: "songs/1.mp3",
    coverPath: "covers/cover1.jpg",
  },
  {
    songName: "confetti",
    filePath: "songs/2.mp3",
    coverPath: "covers/cover2.jpg",
  },
  { songName: "ADHD", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg" },
  {
    songName: "Such a Whore",
    filePath: "songs/4.mp3",
    coverPath: "covers/cover4.jpg",
  },
  {
    songName: "Save Dat Money",
    filePath: "songs/5.mp3",
    coverPath: "covers/cover5.jpg",
  },
  {
    songName: "4-3-2-1",
    filePath: "songs/6.mp3",
    coverPath: "covers/cover6.jpg",
  },
  {
    songName: "Hollywod Bleeding",
    filePath: "songs/7.mp3",
    coverPath: "covers/cover7.jpg",
  },
  {
    songName: "Curfew",
    filePath: "songs/8.mp3",
    coverPath: "covers/cover8.jpg",
  },
  {
    songName: "Unravel",
    filePath: "songs/9.mp3",
    coverPath: "covers/cover9.jpg",
  },
  {
    songName: "Stuck With You",
    filePath: "songs/10.mp3",
    coverPath: "covers/cover10.jpg",
  },
];

songItem.forEach((element, i) => {
  element.querySelector("img").src = songs[i].coverPath;
  element.querySelector(".songName").innerText = songs[i].songName;
});

makeAllPlay = () => {
  songItemPlay.forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
    masterPlayer.classList.remove("fa-play");
    masterPlayer.classList.add("fa-pause");
    gif.style.opacity = "1";
  });
};

songItemPlay.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    makeAllPlay();
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    songIndex = index;
    audio.src = songs[songIndex].filePath;
    songName.innerText = songs[songIndex].songName;

    if (e.target.classList.contains("fa-pause")) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});

//Handling play and pause

masterPlayer.addEventListener("click", () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.play();
    masterPlayer.classList.remove("fa-play");
    masterPlayer.classList.add("fa-pause");
    gif.style.opacity = "1";
    songName.innerText = songs[songIndex].songName;
  } else {
    audio.pause();
    masterPlayer.classList.remove("fa-pause");
    masterPlayer.classList.add("fa-play");
    gif.style.opacity = "0";
    songName.innerText = songs[songIndex].songName;
  }
});

previous.addEventListener("click", () => {
  if (songIndex > 0) {
    audio.src = songs[songIndex - 1].filePath;
    songIndex -= 1;
    audio.play();
    songName.innerText = songs[songIndex].songName;
  } else {
    songIndex = songs.length;
  }
});
next.addEventListener("click", () => {
  console.log("clicked");
  if (songIndex < songs.length - 1) {
    audio.src = songs[songIndex + 1].filePath;
    songIndex += 1;
    audio.play();

    songName.innerText = songs[songIndex].songName;
  } else {
    songIndex = -1;
  }
});

audio.addEventListener("timeupdate", () => {
  progress = parseInt((audio.currentTime / audio.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audio.currentTime = (progressBar.value * audio.duration) / 100;
});
