// const waves = new Howl({
//   src: ["audio/waves.mp3"],
//   volume: 0.5,
//   loop: true,
// });

// document
//   .querySelector('[data-audio="waves"]')
//   .addEventListener("click", (e) => {
//     if (waves.playing()) {
//       waves.pause();
//       e.target.classList.remove("active");
//     } else {
//       waves.play();
//       e.target.classList.add("active");
//     }
//   });

const sounds = {};

document.querySelectorAll(".sounds>span").forEach((icon) => {
  sounds[icon.dataset.audio] = new Howl({
    src: [`audio/${icon.dataset.audio}.mp3`],
    volume: 0.5,
    loop: true,
  });

  icon.addEventListener("click", (e) => {
    if (sounds[icon.dataset.audio].playing()) {
      sounds[icon.dataset.audio].pause();
      e.target.classList.remove("active");
    } else {
      sounds[icon.dataset.audio].play();
      e.target.classList.add("active");
    }
  });
});

console.log(sounds);
