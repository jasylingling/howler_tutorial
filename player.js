//// ** Example play 1 song *** 

// const waves = new Howl({
//   src: ["audio/waves.mp3"],
//   volume: 0.5,
//   loop: true,
// });

// document.querySelector('[data-audio="waves"]').addEventListener("click", (e) => {
//     if (waves.playing()) {
//       waves.pause();
//       document.querySelector('[data-audio="waves"]').classList.remove("active");
//     } else {
//       waves.play();
//       document.querySelector('[data-audio="waves"]').classList.add("active");
//     }
//   });


//// ** Example play multiple songs at the same time (dynamic) ***

const sounds = {};

document.querySelectorAll(".sounds > span").forEach((icon) => {
  sounds[icon.dataset.audio] = new Howl({
    src: [`audio/${icon.dataset.audio}.mp3`],
    volume: 0.5,
    loop: true,
  });

  icon.addEventListener("click", (e) => {
    if (sounds[icon.dataset.audio].playing()) {
      sounds[icon.dataset.audio].pause();
      icon.classList.remove("active");
    } else {
      sounds[icon.dataset.audio].play();
      icon.classList.add("active");
    }
  });
});

console.log(sounds);
