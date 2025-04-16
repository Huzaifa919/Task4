// script.js

// Sample songs
const songs = [
    {
      title: "Acoustic Breeze",
      artist: "Benjamin Tissot",
      src: "music/acousticbreeze.mp3",
    },
    {
      title: "Sunny",
      artist: "Benjamin Tissot",
      src: "music/sunny.mp3",
    },
    {
      title: "Better Days",
      artist: "Bensound",
      src: "music/betterdays.mp3",
    },
  ];
  
  let currentSong = 0;
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const playBtn = document.getElementById("playBtn");
  
  function loadSong(index) {
    const song = songs[index];
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
  }
  
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.innerText = "⏸️";
    } else {
      audio.pause();
      playBtn.innerText = "▶️";
    }
  }
  
  function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
    playBtn.innerText = "⏸️";
  }
  
  function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
    playBtn.innerText = "⏸️";
  }
  
  // Initialize
  loadSong(currentSong);
  