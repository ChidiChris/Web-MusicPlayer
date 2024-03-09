"use strict";

/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./image/ike.jpg",
    posterUrl: "./image/ike.jpg",
    title: "MMADU (Master)",
    album: "MMADU",
    year: 2022,
    artist: "Emikay",
    musicPath: "./music/MMADU(128K).mp3",
  },
  {
    backgroundImage: "./image/Daily bread.jpg",
    posterUrl: "./image/Daily bread.jpg",
    title: "Amen",
    album: "Amen",
    year: 2022,
    artist: "JKaps",
    musicPath: "./music/AMEN.mp3",
  },
  {
    backgroundImage: "./image/Obiagu.png",
    posterUrl: "./image/Obiagu.png",
    title: "Obiagu (Master)",
    album: "Obiagu",
    year: 2021,
    artist: "JKaps",
    musicPath: "./music/Obiagu(128k).mp3",
  },
  {
    backgroundImage: "./image/Simi.webp",
    posterUrl: "./image/Simi.webp",
    title: "All I Want",
    album: "Simisola",
    year: 2024,
    artist: "Simi",
    musicPath: "./music/Simi - All I Want (NetNaija.com).mp3",
  },
  {
    backgroundImage: "./image/Bat man.jpg",
    posterUrl: "./image/Bat man.jpg",
    title: "Reason",
    album: "Boy Alone",
    year: 2022,
    artist: "Omah Lay",
    musicPath: "./music/01 Omah Lay - reason (NetNaija.com).mp3",
  },
  {
    backgroundImage: "./image/Omah lay.jpg",
    posterUrl: "./image/Omah lay.jpg",
    title: "It's yours",
    album: "Boy Alone",
    year: 2022,
    artist: "Omah Lay",
    musicPath: "./music/03 Omah Lay - it's yours (NetNaija.com).mp3",
  },
  {
    backgroundImage: "./image/Spider man.jpg",
    posterUrl: "./image/Spider man.jpg",
    title: "I'm a mess",
    album: "Boy Alone",
    year: 2022,
    artist: "Omah Lay",
    musicPath: "./music/05 Omah Lay - i'm a mess (NetNaija.com).mp3",
  },
  {
    backgroundImage: "./image/Omah lay.jpg",
    posterUrl: "./image/Omah lay.jpg",
    title: "Safe heaven",
    album: "Boy Alone",
    year: 2022,
    artist: "Omah Lay",
    musicPath: "./music/09 Omah Lay - safe haven (NetNaija.com).mp3",
  },
  {
    backgroundImage: "./image/Egwu.webp",
    posterUrl: "./image/Egwu.webp",
    title: "Egwu",
    album: "Egwu",
    year: 2024,
    artist: "Chike",
    musicPath: "./music/Chiké - Egwu (feat. Mohbad) (NetNaija.com).mp3",
  },
  {
    backgroundImage: "./image/poster-2.jpeg",
    posterUrl: "./image/poster-2.jpeg",
    title: "Boys in the street",
    album: "Bridges",
    year: 2022,
    artist: "Calum Scott",
    musicPath:
      "./music/Calum_Scott_-_Boys_In_The_Street_(Official_Video)(128k).m4a",
  },
  {
    backgroundImage: "./image/poster-3.jpeg",
    posterUrl: "./image/poster-3.jpeg",
    title: "Heaven",
    album: "Heaven",
    year: 2022,
    artist: "Calum Scott",
    musicPath: "./music/Calum_Scott_-_Heaven_(Official_Video)(128k).m4a",
  },
  {
    backgroundImage: "./image/poster-4.jpeg",
    posterUrl: "./image/poster-4.jpeg",
    title: "Heartbreak Anniversary",
    album: "So Fresh",
    year: 2021,
    artist: "Giveon",
    musicPath: "./music/Giveon_-_Heartbreak_Anniversary_(Audio)(128k).m4a",
  },
  {
    backgroundImage: "./image/poster-5.jpeg",
    posterUrl: "./image/poster-5.jpeg",
    title: "Lost me",
    album: "Give or Take",
    year: 2022,
    artist: "Giveon",
    musicPath: "./music/Giveon_-_Lost_Me_(Official_Music_Video)(128k).m4a",
  },
  {
    backgroundImage: "./image/poster-3.jpeg",
    posterUrl: "./image/poster-3.jpeg",
    title: "Take Me Home, Country Roads",
    album: "Poems, Prayer & Promises",
    year: 1971,
    artist: "John Denver",
    musicPath:
      "./music/John_Denver_-_Take_Me_Home,_Country_Roads_(Official_Audio)(256k).mp3",
  },
  {
    backgroundImage: "./image/Cry.jpg",
    posterUrl: "./image/Cry.jpg",
    title: "Homesick",
    album: "Rojo",
    year: 2021,
    artist: "Kane Brown",
    musicPath: "./music/Kane_Brown_-_Homesick_(Official_Video)(128k).mp3",
  },
];

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * PLAYLIST
 *
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${
      i === 0 ? "playing" : ""
    }" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${
    musicData[i].title
  } Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 *
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
};

addEventOnElements(playlistTogglers, "click", togglePlaylist);

/**
 * PLAYLIST ITEM
 *
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
};

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});

/**
 * PLAYER
 *
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute(
    "alt",
    `${musicData[currentMusic].title} Album Poster`
  );
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
};

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - minutes * 60);
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
};

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
};

audioSource.addEventListener("loadeddata", updateDuration);

/**
 * PLAY MUSIC
 *
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
};

playBtn.addEventListener("click", playMusic);

/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
};

/**
 * RANGE FILL WIDTH
 *
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
};

addEventOnElements(ranges, "input", updateRangeFill);

/**
 * SEEK MUSIC
 *
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
};

playerSeekRange.addEventListener("input", seek);

/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();

    // Play the next song..... You can work on this later in the future.
  //   if (currentMusic < musicData.length - 1) {
  //     currentMusic++;
  //   } else {
  //     currentMusic = 0;
  //   }
  //   changePlayerInfo();
  //   changePlaylistItem();
  // }
};

/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? (currentMusic = 0) : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipNextBtn.addEventListener("click", skipNext);

/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? (currentMusic = musicData.length - 1) : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipPrevBtn.addEventListener("click", skipPrev);

/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => (currentMusic = getRandomMusic());

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
};

playerShuffleBtn.addEventListener("click", shuffle);

/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
};

playerRepeatBtn.addEventListener("click", repeat);

/**
 * MUSIC VOLUME
 *
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
};

playerVolumeRange.addEventListener("input", changeVolume);

/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
};

playerVolumeBtn.addEventListener("click", muteVolume);

