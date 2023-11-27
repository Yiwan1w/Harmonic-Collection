const trackEls = [...document.querySelectorAll(".track")];

for (const trackEl of trackEls) {
  const audioEl = trackEl.querySelector("audio");
  trackEl.addEventListener("click", () => {
    audioEl.paused ? audioEl.play() : audioEl.pause();
  });
}