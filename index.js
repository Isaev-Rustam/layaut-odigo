'strict mode';

document.addEventListener('DOMContentLoaded', function () {
  //burger menu
  const burgerBtn = document.querySelector('.burger__btn');
  burgerBtn.addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu--active');
    burgerBtn.classList.toggle('burger__btn--active');
  });

  //play on play video
  const btn = document.querySelector('.video__btn-play');
  const video = document.querySelector('.video-player');

  btn.addEventListener('click', function () {
    btn.style.display = 'none';
    video.style.display = 'block';
  });
});
